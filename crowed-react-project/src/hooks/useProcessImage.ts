import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';
export interface MainResponse {
  status: string;
  message: string;
  data: {
    image: string; // The processed image as a URL or base64 string
  };
}

const useProcessImage = () => {
  return useMutation<MainResponse, Error, FormData>({
    mutationFn: async (formData) => {
      const response = await axios.post('http://127.0.0.1:8000/annotate-image', formData);
      return response.data.annotated_image
    },
    onSuccess: () => {
      toast.success("Image processed successfully");
    },
    onError: () => {
      toast.error("Error processing image");
    }
  });
};

export default useProcessImage;
