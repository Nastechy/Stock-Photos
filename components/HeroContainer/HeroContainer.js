export default function HeroContainer(props) {
  const { file, children } = props;

  return (
    <>
      {file.type === "image" ? (
        <div
          style={{ backgroundImage: `url(${file.file})` }}
          role={"imagecontainer"}
          className={`w-[100%] bg-cover bg-center  bg-no-repeat h-[500px] `}
        >
          {children}
        </div>
      ) : (
        <div>
          <video
            id="myVideo"
            className={`min-w-[100%] h-[500px] `}
            muted
            loop
            autoPlay
          >
            <source src={file.file} role="video" />
          </video>
          <div className="videocontent">{children}</div>
        </div>
      )}
    </>
  );
}
