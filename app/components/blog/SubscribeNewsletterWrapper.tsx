import SubscribeNewsletter from "../SubscribeNewsletter";

export const SubscribeNewsletterWrapper: React.FC = () => {
  return (
    <div className='border-2 rounded-lg border-opacity-50 border-amber-500 p-6 shadow-md'>
      <SubscribeNewsletter
        heading='📝 Loved This Article?'
        headingSize='text-xl'
        paragraph='Get more articles like this straight into your inbox 📩'
        paragraphSize='text-xs'
        buttonText='Subscribe'
      />
    </div>
  );
};
