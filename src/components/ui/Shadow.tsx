type Shadows = {
    children? : React.ReactNode;
}

const Shadow:React.FC<Shadows> = ({children}) => {
    return (
      <div className="cover backdrop-blur-sm bg-white bg-opacity-50 w-full h-full fixed top-0 left-0 z-50">
        <div className="flex flex-col justify-center items-center h-full">{children}</div>
      </div>
    );
  };
  
export default Shadow;
  

