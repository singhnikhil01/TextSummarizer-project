import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Clipboard = ({ text }) => {

  const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(text);
        toast.success('🦄 Wow so easy!');
        // setShowToast(true);
    } catch (error) {
      console.error('Unable to copy to clipboard', error);
      toast.error(error.response.data.message);
    }
  };


  return (
    <div>
      
      <button onClick={copyToClipboard}>Copy to Clipboard</button>
      
    </div>
  );
};

export default Clipboard;

