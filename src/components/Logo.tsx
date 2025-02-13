import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

const Logo = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={140}
    height={140}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M21.69 2.987H7v.292l1.948 1.855v20.584l11.43 5.432 7.035-3.379-7.934-6.926-1.908-1.18-.49.662.278 1.272-2.437.702-.756-2.463 1.34-.346.449-.94-.848-.477 2.04-4.65 1.325.65.37-.742-2.887-1.735V8.962l2.768 2.173 2.968-8.148Z"
    />
    <path
      fill="currentColor"
      d="M30.022 2.987h3.643L31.692 4.92v16.903l-10.2-3.84-.741-2.438-.808-.372.543-.967 2.913 1.59 2.306-1.325-3.114-1.218 7.431-10.267ZM11.113 36.455a.11.11 0 0 1-.113-.113l.01-.049 1.297-3.483c.036-.09.1-.135.194-.135h.594c.094 0 .159.045.195.135l1.296 3.483.01.049c0 .032-.012.06-.037.08a.104.104 0 0 1-.076.033h-.48a.157.157 0 0 1-.157-.102l-.249-.654H12l-.248.654a.157.157 0 0 1-.157.102h-.48Zm1.075-1.382h1.22l-.61-1.663-.61 1.663Zm2.902 1.382a.125.125 0 0 1-.092-.038.125.125 0 0 1-.038-.091v-3.521c0-.04.013-.07.038-.092a.125.125 0 0 1 .092-.038h.507c.04 0 .07.013.092.038a.114.114 0 0 1 .038.092v3.002h1.712c.04 0 .072.013.097.038a.125.125 0 0 1 .038.092v.389a.125.125 0 0 1-.038.091.132.132 0 0 1-.097.038h-2.35Zm3.002 0a.125.125 0 0 1-.091-.038.125.125 0 0 1-.038-.091V32.81c0-.04.01-.072.032-.097a.132.132 0 0 1 .097-.038h1.448c.435 0 .777.103 1.026.308.248.205.372.504.372.897 0 .388-.124.683-.372.885-.249.198-.59.297-1.026.297h-.794v1.264c0 .04-.013.072-.038.097a.144.144 0 0 1-.097.032h-.519Zm1.42-1.998c.21 0 .368-.048.476-.145.111-.101.167-.247.167-.438 0-.187-.054-.333-.162-.437-.104-.105-.264-.157-.48-.157h-.778v1.177h.777Zm2.01 1.998a.125.125 0 0 1-.092-.038.125.125 0 0 1-.037-.091V32.81c0-.04.01-.072.032-.097a.132.132 0 0 1 .097-.038h.497c.04 0 .072.013.097.038a.132.132 0 0 1 .038.097v1.388h1.577V32.81c0-.04.012-.072.038-.097a.125.125 0 0 1 .091-.038h.503c.04 0 .07.013.091.038a.132.132 0 0 1 .038.097v3.516a.125.125 0 0 1-.038.091.114.114 0 0 1-.091.038h-.503a.125.125 0 0 1-.091-.038.125.125 0 0 1-.038-.091v-1.442h-1.577v1.442a.125.125 0 0 1-.038.091.132.132 0 0 1-.097.038h-.497Zm3.448 0a.11.11 0 0 1-.113-.113l.01-.049 1.296-3.483c.036-.09.101-.135.195-.135h.594c.093 0 .158.045.194.135l1.296 3.483.01.049c0 .032-.012.06-.037.08a.104.104 0 0 1-.075.033h-.481a.157.157 0 0 1-.157-.102l-.248-.654h-1.599l-.248.654a.157.157 0 0 1-.156.102h-.481Zm1.075-1.382h1.22l-.61-1.663-.61 1.663Z"
    />
  </svg>
);
export default Logo;
