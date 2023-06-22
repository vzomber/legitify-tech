import { Column } from 'components/Column';
import {
  mockTickets1,
  mockTickets2,
  mockTickets3,
  mockTickets4,
} from 'components/Column/helpers';

export const MainScreen = () => {
  return (
    <div className={'flex h-screen w-screen items-center justify-center py-36'}>
      <Column name={'Idea'} tickets={mockTickets1} />
      <Column name={'Todo'} tickets={mockTickets2} />
      <Column name={'In Progress'} tickets={mockTickets3} />
      <Column name={'Published'} tickets={mockTickets4} />
    </div>
  );
};
