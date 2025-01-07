export interface ThemeStyles {
  text: {
    color?: string;
  };
  background: {
    backgroundColor?: string;
  };
  primary: {
    backgroundColor?: string;
    color?: string;
  };
  secondary: {
    backgroundColor?: string;
    color?: string;
  };
  accent: {
    color?: string;
  };
  section: {
    backgroundColor?: string;
    color?: string;
  };
  button: {
    primary: {
      backgroundColor?: string;
      color?: string;
      transition?: string;
    };
    secondary: {
      backgroundColor?: string;
      color?: string;
      transition?: string;
    };
  };
  card: {
    backgroundColor?: string;
    borderRadius?: string;
    boxShadow?: string;
    transition?: string;
  };
}
