import { useLottie } from "lottie-react";

const Loading = ({ animation }) => {
  const option = {
    animation: animation.default,
    loop: true,
    autoplay: true,
  };

  const style = {
    height: 300,
  };

  const { View } = useLottie(option, style);

  return View;
};

export default Loading;
