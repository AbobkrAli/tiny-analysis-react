
export interface MainResponse {
  status: string;
  message: string;
  data: {
      image: string; 
  };
}

export interface CreatMainAnalysisState {
  selectedImage: File | null; 
  setSelectedImage: (image: File | null) => void; 

  mainResponse: MainResponse | null; 
  setMainResponse: (response: MainResponse) => void; 
  analysisOptions: AnalysisOptions;
  setAnalysisOptions: (options: AnalysisOptions) => void;
}

export interface AnalysisOptions {
  headCounting: boolean;
  heatMap: boolean;
  graphAnalysis: boolean;
}