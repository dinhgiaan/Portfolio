import { Button } from '@/components/ui/button';

const App = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center text-center space-y-4'>
        <div className='text-4xl text-orange-700'>
          This portfolio belongs to Dinhgiaan.
        </div>

        <Button className='w-56' variant={'outline'}>
          dinhgiaanforwork@gmail.com
        </Button>
      </div>
    </div>
  );
};

export default App;
