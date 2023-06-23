import { FC } from 'react';
import { Ticket } from 'components/Ticket';
import { ITicket } from 'components/Ticket/types';
import { useDrop } from 'react-dnd';
import { DraggableItemsEnum, IColumn } from './types';

export const Column: FC<IColumn> = ({
  name,
  columnType,
  tickets,
  onTicketDrop,
  onAddNewTicket,
  onRemoveTicket,
  isCreatable = false,
}) => {
  const [, dropRef] = useDrop(() => ({
    accept: DraggableItemsEnum.TICKET,
    drop: (item: ITicket) => {
      onTicketDrop(item.id, columnType);
    },
  }));

  const submitHandler: React.FormEventHandler<HTMLFormElement> | undefined = (
    event
  ) => {
    event.preventDefault();
    const target = event.target as Record<string, any>;
    const ticketData = target[0].value;

    if (ticketData) {
      const [title, description] = ticketData.split('|');
      onAddNewTicket(title, description, columnType);
      target[0].value = '';
    }
  };

  return (
    <div
      ref={dropRef}
      className={
        'mx-2 flex h-full w-64 flex-col overflow-hidden rounded border border-primary p-2 py-4'
      }
    >
      <p className={'pb-2 font-semibold'}>{name}</p>
      <div className={'grid grid-cols-1 gap-3 overflow-scroll'}>
        {tickets
          .filter((ticket) => ticket.columnType === columnType)
          .sort((a, b) => a.orderNumber - b.orderNumber)
          .map((ticket) => (
            <Ticket
              key={ticket.id}
              {...ticket}
              onRemoveTicket={onRemoveTicket}
            />
          ))}
      </div>
      {isCreatable && (
        <form className={'mt-4'} onSubmit={submitHandler}>
          <textarea
            id="newTicket"
            name="newTicketData"
            rows={3}
            cols={33}
            className={'w-full rounded border border-primary py-2 px-1'}
            placeholder={'Title | Description'}
          />
          <button type="submit" className={'ml-auto block border'}>
            Add task
          </button>
        </form>
      )}
    </div>
  );
};
