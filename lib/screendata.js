const getScreenData = function(frame) {
  if (typeof window !== 'undefined') { 
    if (window.innerWidth > window.innerHeight) {
      frame.orientation = "paysage";
      frame.ratio = window.innerWidth / window.innerHeight;
      frame.height = window.innerHeight;
      frame.width = window.innerWidth - 50;
      if (window.innerWidth < 900) {
        frame.device = "mobile";
      } else { frame.device = "desktop"};
    } else {
      frame.orientation = "portrait";
      frame.ratio = window.innerHeight / window.innerWidth;
      frame.height = window.innerHeight - 50;
      frame.width = window.innerWidth;
      if (window.innerWidth < 600) {
        frame.device = "mobile";
      } else { frame.device = "desktop"};
    };
    if (frame.ratio < 2) {frame.shape = "redux";}
    else  {frame.shape = "wide";};
  } else {
      frame.shape= "redux";
      frame.orientation = "portrait";
      frame.device = "mobile";
  };
  console.log(frame);
}
export default getScreenData
