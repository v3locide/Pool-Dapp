"use client";

// RainbowKit
import { ConnectButton } from "@rainbow-me/rainbowkit";

import React from "react";
// ChakraUI
import { Flex, Icon } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      p="2rem"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Icon viewBox="0 0 500 500" boxSize={120}>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
          <g fillRule="evenodd">
            <path
              fill="#e34f5b"
              d="M137.732 31.755c-3.055.657-2.888.826 1.385 1.396 3.552.474 5.789.959 9.103 1.974 2.298.704 6.38 2.925 7.717 4.2l1.338 1.275-.223 3.2c-.122 1.76-.392 4.01-.6 5-.354 1.684-.585 2.876-1.687 8.7-.24 1.265-.592 3.11-.783 4.1s-.551 2.88-.8 4.2-.609 3.21-.8 4.2c-.316 1.642-.61 3.189-1.592 8.4-.187.99-.464 2.385-.615 3.1-.302 1.427.63 1.751 2.706.942.506-.197 1.729-.588 2.719-.869 8.26-2.339 16.986-9.516 21.609-17.773 2.578-4.604 9.571-18.709 9.407-18.974-.105-.169-1.411-.412-2.903-.54-4.98-.427-10.907-2.789-18.416-7.339-8.532-5.17-18.734-7.091-27.565-5.192m-7.874 11.057c-4.69.74-9.366 2.262-15.058 4.9-10.374 4.809-20.293 5.865-29.47 3.138-1.795-.533-1.805-.399-.268 3.475 6.948 17.511 16.241 25.989 31.432 28.676 5.245.927 23.377.85 23.661-.101.115-.385 1.017-5.02 2.006-10.3 1.911-10.206 2.655-14.107 3.852-20.2.411-2.09.862-4.624 1.002-5.632l.255-1.832-1.735-.642c-4.374-1.617-10.907-2.234-15.677-1.482M83.6 118.266c-19.299 8.924-34.054 20.576-46.264 36.534-2.03 2.654-6.936 9.828-6.936 10.144 0 .096-.688 1.318-1.529 2.715-2.985 4.961-7.574 15.107-9.455 20.907-1.068 3.289-2.12 6.883-2.587 8.834-.264 1.1-.639 2.63-.833 3.4-1.398 5.533-2.767 17.699-2.784 24.732-.014 5.926.907 15.487 2.011 20.868 3.355 16.35 8.834 29.487 17.742 42.541 1.779 2.607 3.889 5.708 4.688 6.891 2.582 3.82 2.504 5.718-.492 11.968-3.496 7.294-4.83 16.066-2.672 17.577 4.254 2.98 17.621-1.757 25.389-8.998 8.101-7.552 12.316-8.779 30.162-8.779 14.09 0 13.449.148 12.316-2.841-2.409-6.359-.615-14.336 4.548-20.216l1.214-1.383-1.201-1.28c-7.274-7.752-7.416-19.479-.33-27.224 1.731-1.892 1.764-1.548-.369-3.92-6.522-7.254-6.261-20.476.524-26.498 1.144-1.016 1.108-1.193-.694-3.366-8.458-10.203-5.443-25.451 6.152-31.11l3.2-1.562h115.26l3.429 1.699c7.564 3.748 11.149 10.473 10.555 19.801l-.248 3.9H254.8l-.007-1.5c-.012-2.441-1.769-11.643-3.189-16.7l-.786-2.8c-.819-2.918-2.678-8.162-3.829-10.8-.288-.66-.843-2.01-1.233-3-4.521-11.465-17.181-29.681-26.41-38-9.435-8.506-17.004-13.927-26.187-18.758-6.465-3.402-6.758-3.356-4.407.688 2.764 4.754 6.453 12.517 9.252 19.47 1.207 3 3.698 10.216 4.417 12.8.184.66.512 1.83.73 2.6 2.903 10.266 2.62 13.081-1.389 13.834-3.203.6-5.208-1.138-6.152-5.335-1.407-6.263-5.368-18.44-7.709-23.699a362 362 0 0 1-1.74-3.983c-2.491-5.834-8.007-15.617-8.807-15.617-1.049 0-6.418 9.24-8.715 15-1.406 3.527-1.852 4.927-3.667 11.515-1.29 4.682-4.938 5.999-8.036 2.901-1.02-1.02-1.336-1.676-1.336-2.778 0-3.984 4.631-17.258 8.079-23.156.617-1.054 1.121-2.016 1.121-2.138s.371-.742.825-1.38c1.164-1.634.821-1.84-2.498-1.499-23.925 2.46-46.335 2.015-65.727-1.307-2.524-.433-3.93-.73-8.226-1.74-3.256-.766-3.824-.762-5.574.048m34.8 79.212c-2.989.504-8.202 5.253-7.041 6.415.12.12.386-.222.59-.76 1.633-4.293 4.089-5.264 14.051-5.549l8.2-.235-7.4-.02c-4.07-.011-7.85.056-8.4.149m-7.46 10.122c0 1.87.069 2.635.153 1.7s.084-2.465 0-3.4-.153-.17-.153 1.7m.26 3.841c0 .758 2.092 3.727 3.083 4.377.906.593.796.368-.584-1.2-.934-1.062-1.699-2.165-1.699-2.451s-.18-.631-.4-.767-.4-.117-.4.041m6.536 6.253c.255.162 3.704.264 7.664.228 7.874-.072 6.914-.248-2.264-.415-3.225-.059-5.655.025-5.4.187M131.1 257.9c6.435.062 16.965.062 23.4 0s1.17-.113-11.7-.113-18.135.051-11.7.113m-14.261.722c-.748.325-1.24.711-1.093.857s.48.055.741-.206c.26-.26.786-.473 1.169-.473s.808-.18.944-.4c.334-.541-.141-.481-1.761.222m-3.142 2.284c-1.833 1.901-2.909 4.721-2.834 7.427l.063 2.267.255-2.6c.308-3.14 1.213-5.326 2.857-6.896.675-.645 1.155-1.245 1.067-1.332-.088-.088-.721.422-1.408 1.134M167.8 269.6c1.75 1.76 3.271 3.2 3.381 3.2s-1.231-1.44-2.981-3.2-3.271-3.2-3.381-3.2 1.231 1.44 2.981 3.2m-56.6 1.35c0 1.237 2.869 5.031 4.44 5.871.389.209-.27-.599-1.466-1.795S112 272.491 112 272.05c0-.442-.18-.914-.4-1.05s-.4-.158-.4-.05m11.721 7.348c2.156.073 5.576.072 7.6 0 2.023-.073.259-.132-3.921-.131-4.18 0-5.836.059-3.679.131m-3.246 40.042c-.85.239 73.138.196 89.725-.052 3.96-.059-14.4-.13-40.8-.158s-48.416.067-48.925.21m184.856-.04c13.382.058 35.162.058 48.4 0s2.289-.106-24.331-.106-37.451.048-24.069.106m-188.953 1.628c-1.81 1.149-3.642 3.483-4.14 5.277-.152.547.137.225.643-.715 1.174-2.184 2.827-3.915 4.667-4.888.799-.421 1.262-.775 1.03-.784s-1.222.49-2.2 1.11m156.218 6.572-7.596 7.7 7.7-7.596c4.235-4.178 7.7-7.643 7.7-7.7 0-.285-.746.442-7.804 7.596m-160.872 2.1c.002 1.32.077 1.812.166 1.093s.087-1.799-.004-2.4-.164-.013-.162 1.307m.511 3.4c.81 2.953 4.374 6.137 7.392 6.603 1.028.159.84.021-.749-.546-2.931-1.048-4.179-2.175-5.997-5.417-.556-.991-.811-1.244-.646-.64m35.496 7.1c14.482.058 38.062.058 52.4 0s2.489-.106-26.331-.106-40.551.048-26.069.106m151.369 0c14.355.058 37.845.058 52.2 0s2.61-.106-26.1-.106-40.455.048-26.1.106"
            ></path>
            <path
              fill="#f8e53a"
              d="M94.235 89.498c-.164.164-1.499.426-2.967.582-7.041.749-9.96 1.575-7.068 2.002 1.1.163 3.17.49 4.6.729 4.433.739 7.2.902 7.2.425 0-.24-.168-.436-.373-.436-.847 0-.89-1.652-.061-2.37.459-.398.834-.838.834-.977 0-.355-1.803-.317-2.165.045M126 197.578c-7.323.215-8.371.332-9.8 1.093-7.148 3.804-6.783 14.894.6 18.251 1.765.803 2.559.822 41.145 1.001l39.344.181 1.917-2.152 1.917-2.152 16.339-.2 16.338-.2.699-1.4c2.251-4.504-.041-11.251-4.661-13.724l-1.638-.876-47-.032c-25.85-.017-50.69.077-55.2.21m-7.603 30.396c-8.865 2.696-9.987 14.534-1.797 18.961 1.592.861 1.744.865 29.8.962l28.2.096 2.8-3.669c1.54-2.018 4.036-5.301 5.547-7.297A515 515 0 0 1 187.58 231c1.037-1.32 2.017-2.625 2.177-2.9.33-.568-69.501-.692-71.36-.126m.003 30.403c-.33.182-1.14.575-1.8.874-3.782 1.713-7.417 10.255-5 11.749.22.136.4.571.4.967 0 1.147 3.011 4.256 5.05 5.215 2.165 1.017 58.093 1.88 58.696.906.154-.251-2.306-2.99-5.738-6.388L164 265.75v-1.927c0-1.565.263-2.294 1.399-3.875l1.4-1.948-23.9.024c-13.144.012-24.169.172-24.499.353m1.2 29.9c-9.631 1.027-11.872 14.726-3.122 19.087l2.079 1.036 44.222-.005L207 308.39l-10.248-10.195L186.505 288l-32.753.064c-18.013.035-33.382.131-34.152.213m180.803 9.914L290.206 308.4h44.271c30.098 0 44.631-.135 45.397-.422 8.343-3.13 9.037-14.69 1.126-18.751l-2-1.027-34.2-.109-34.2-.11zM119.6 318.774c-10.514 1.563-11.313 16.411-1.043 19.396 3.015.877 107.496.933 109.944.059 5.812-2.074 5.605-2.755-3.624-11.942l-7.923-7.887-47.777.053c-26.277.03-48.587.174-49.577.321m152.491 7.732-8.109 8.119 1.309 1.265c3.248 3.138-1.765 2.892 59.109 2.897l54.2.005 2-.933c7.691-3.589 8.133-13.444.817-18.206L379.8 318.6l-49.8-.106-49.8-.106zM117.6 348.942c-8.619 2.82-9.378 15.03-1.2 19.301 2.105 1.1 110.928 1.169 113.252.072 7.824-3.693 7.634-16.13-.291-19.095-2.615-.979-108.813-1.243-111.761-.278m151.134.202c-8.628 1.876-9.054 15.22-.601 18.83 2.55 1.09 108.75 1.326 111.802.249 8.035-2.835 9.173-14.778 1.77-18.585-1.056-.544-110.54-1.022-112.971-.494"
            ></path>
            <path
              fill="#7ae9db"
              d="M332.564 126.1c-2.11 4.176-7.585 9.912-12.329 12.917-3.668 2.324-3.658 1.997-.132 4.158 3.727 2.283 9.621 8.221 11.65 11.735 1.37 2.374 2.647 3.473 2.647 2.277 0-2.116 7.774-10.579 12.725-13.85l3.324-2.197-3.524-2.329c-4.895-3.234-10.173-8.802-12.049-12.711-.343-.715-.856-1.3-1.14-1.3s-.811.585-1.172 1.3m-39.118 72.886c-.355.542-.646 1.096-.646 1.23 0 2.058-8.939 10.758-13.779 13.41-1.831 1.004-1.675 1.306 1.866 3.599 4.237 2.744 8.816 7.325 11.27 11.275 1.954 3.145 2.787 3.738 3.24 2.308 1.238-3.898 12.679-15.208 15.385-15.208.23 0 .418-.36.418-.8s-.188-.8-.418-.8c-2.217 0-10.568-7.617-13.819-12.604-2.436-3.738-2.582-3.837-3.517-2.41M209.464 223.5c-.101.165 1.055 6.51 2.567 14.1s2.755 13.935 2.76 14.1c.03.974 1.447-.544 7.466-8 3.686-4.565 6.808-8.39 6.938-8.5.607-.511 8.89-10.955 9.078-11.445.235-.612-28.436-.866-28.809-.255m49.207-.016c-.113.184 1.651 2.622 3.92 5.42l5.468 6.738a78 78 0 0 0 1.753 2.105c.227.249 2.375 2.883 4.774 5.853 6.375 7.891 6.79 8.385 7.062 8.393.27.008.823-2.046 1.558-5.793 1.073-5.47 1.28-6.466 1.629-7.846 1.001-3.967-2.069-8.545-8.835-13.175l-2.6-1.779-7.261-.124c-3.994-.069-7.354.025-7.468.208m-13.938 8.016c-1.904 2.365-3.793 4.681-4.198 5.146-.404.466-3.615 4.408-7.135 8.761s-6.581 8.112-6.802 8.354-1.183 1.384-2.137 2.539l-1.735 2.1h51.341l-1.329-1.7c-.73-.935-3.041-3.779-5.133-6.319a1301 1301 0 0 1-6.805-8.339c-1.65-2.046-3.185-3.928-3.412-4.181s-2.275-2.756-4.552-5.561-4.253-5.1-4.39-5.1c-.138 0-1.809 1.935-3.713 4.3m-48.333 3.971a856 856 0 0 1-5.6 7.334c-.99 1.27-2.79 3.606-4 5.192s-3.482 4.53-5.049 6.543l-2.849 3.66 13.41.105c7.376.058 13.506.01 13.622-.106.177-.176-3.445-19.502-4.853-25.899-.543-2.464-.292-2.634-4.681 3.171m103.804 6.741c-2.034 4.154-3.325 5.384-5.655 5.387-1.516.001-1.963.509-2.293 2.601-.139.88-.418 2.41-.619 3.4-.202.99-.496 2.475-.654 3.3l-.288 1.5h13.675c13.104 0 13.654-.03 13.153-.721-.488-.673-2.073-2.75-11.026-14.449-4.345-5.678-4.035-5.628-6.293-1.018M181.2 268.701c0 .166 11.43 11.73 25.4 25.699s25.4 25.168 25.4 24.887-.611-1.81-1.358-3.398a275 275 0 0 1-2.237-4.889c-.484-1.1-1.314-2.945-1.843-4.1a1534 1534 0 0 1-3.923-8.6c-.572-1.265-1.47-3.245-1.997-4.4-4.393-9.634-6.703-14.734-7.835-17.3a413 413 0 0 0-3.317-7.3l-.425-.9h-13.933c-7.662 0-13.932.136-13.932.301m38.8-.079c0 .122.38 1.067.846 2.1a874 874 0 0 1 1.644 3.678c.963 2.168 1.636 3.654 6.789 15 2.198 4.84 4.359 9.61 4.8 10.6.442.99 1.307 2.88 1.921 4.2s1.516 3.3 2.003 4.4a664 664 0 0 0 3.857 8.5c.583 1.265 2.196 4.82 3.584 7.9 2.164 4.802 3.756 7.109 3.756 5.441 0-.229.433-1.368.962-2.529.529-1.162 2.759-6.072 4.955-10.912l4.993-11c.55-1.21 1.399-3.1 1.887-4.2.487-1.1 1.389-3.08 2.003-4.4s1.479-3.21 1.923-4.2 3.071-6.8 5.841-12.912 5.036-11.287 5.036-11.5c0-.247-10.33-.388-28.4-.388-15.62 0-28.4.1-28.4.222m67.446.764c-.355.542-.646 1.087-.646 1.211s-.608 1.526-1.352 3.114a475 475 0 0 0-2.957 6.489c-.882 1.98-2.185 4.86-2.894 6.4a675 675 0 0 0-3.994 8.8 318 318 0 0 1-2.003 4.4 305 305 0 0 0-2 4.4c-.486 1.1-1.385 3.08-1.999 4.4-3.772 8.112-4.825 10.6-4.486 10.6.383 0 50.485-50.118 50.485-50.501 0-.165-6.189-.299-13.754-.299h-13.754z"
            ></path>

            <path
              fill="#2d446b"
              d="M138.8 21.2c0 .222-1.067.4-2.4.4s-2.4.178-2.4.4c0 .22-.529.4-1.176.4s-1.288.18-1.424.4-.676.4-1.2.4-1.064.18-1.2.4-.687.4-1.224.4-.976.166-.976.368c0 .203-.538.487-1.195.631-.658.144-1.299.429-1.424.632-.126.203-.578.369-1.005.369s-.776.18-.776.4-.236.4-.525.4c-.288 0-.911.36-1.383.8s-1.019.8-1.216.8-.879.497-1.517 1.104a26 26 0 0 1-2.559 2.084c-1.422.994-3.582 3.2-3.594 3.67-.003.141-.537.826-1.186 1.52s-1.29 1.614-1.426 2.042c-.156.492-.608.78-1.221.78-.535 0-.973.18-.973.4s-.54.4-1.2.4-1.2.139-1.2.309c0 1.6-13.759 1.636-16.895.044-.382-.194-.967-.353-1.3-.353s-.605-.18-.605-.4-.36-.4-.8-.4-.8-.18-.8-.4-.32-.4-.712-.4-.971-.36-1.288-.8-.817-.8-1.11-.8-1.594-1.08-2.89-2.4l-2.356-2.4h-2.64c-2.775 0-3.613.464-4.904 2.717C67.505 36.154 67.427 40 68 40c.22 0 .4.36.4.8s.18.8.4.8.4.54.4 1.2.18 1.2.4 1.2.4.36.4.8.18.8.4.8.4.349.4.776.18.888.4 1.024.4.687.4 1.224.18.976.4.976.4.36.4.8.18.8.4.8.4.54.4 1.2.18 1.2.4 1.2.4.36.4.8.16.8.355.8.451.495.57 1.1c.344 1.755 1.244 4.1 1.573 4.1.166 0 .302.439.302.976s.18 1.088.4 1.224.4.597.4 1.024.18.776.4.776.4.36.4.8.18.8.4.8.4.36.4.8.18.8.4.8.4.36.4.8.18.8.4.8.4.36.4.8.18.8.4.8.4.27.4.6.18.6.4.6.4.178.4.395c0 .453.692 1.325 3.1 3.908.935 1.004 1.7 2.066 1.7 2.361s.18.536.4.536.4.18.4.4-.979.4-2.176.4-2.288.18-2.424.4-.946.4-1.8.4-1.664.18-1.8.4-.957.4-1.824.4-1.576.18-1.576.4-.54.4-1.2.4-1.2.18-1.2.4-.36.4-.8.4-.8.18-.8.4-.36.4-.8.4-.8.18-.8.4-.275.4-.611.4-1.415.805-2.4 1.789L66 88.379v8.816c0 9.947-.132 9.434 3.3 12.863 2.691 2.688 2.628 2.509 1.1 3.142-.66.273-1.2.655-1.2.849s-.36.351-.8.351-.8.18-.8.4-.36.4-.8.4-.8.18-.8.4-.236.4-.525.4c-.288 0-.911.36-1.383.8s-1.07.8-1.328.8c-.259 0-.761.316-1.117.703s-1.142.957-1.747 1.267c-.605.311-1.1.715-1.1.898 0 .182-.23.332-.512.332-.281 0-.771.36-1.088.8s-.825.8-1.128.8-1.055.54-1.672 1.2-1.326 1.2-1.577 1.2c-.463 0-.951.347-2.542 1.809-.485.444-1.511 1.25-2.281 1.789-.77.54-2.39 2.024-3.6 3.298a1593 1593 0 0 1-6.4 6.676c-5.379 5.581-8 8.5-8 8.91 0 .179-.54.89-1.2 1.581s-1.2 1.499-1.2 1.796c0 .298-.159.541-.354.541s-.633.585-.974 1.3-.991 1.697-1.446 2.183-.826 1.161-.826 1.5-.18.617-.4.617-.4.32-.4.712-.36.971-.8 1.288-.8.792-.8 1.055-.135.538-.3.612c-.376.167-1.675 2.297-1.971 3.233-.122.385-.381.7-.576.7s-.353.36-.353.8-.18.8-.4.8-.4.36-.4.8-.18.8-.4.8-.4.36-.4.8-.18.8-.4.8-.4.36-.4.8-.18.8-.4.8-.4.36-.4.8-.18.8-.4.8-.4.36-.4.8-.18.8-.4.8-.4.343-.4.762-.386 1.544-.857 2.5c-.902 1.83-1.163 2.466-1.943 4.738-.264.77-.623 1.76-.797 2.2-.774 1.959-1.603 5.19-1.603 6.246 0 .635-.18 1.154-.4 1.154s-.4.731-.4 1.624c0 .98-.158 1.525-.4 1.376-.241-.149-.4.388-.4 1.353 0 .88-.18 1.711-.4 1.847s-.4.946-.4 1.8-.18 1.664-.4 1.8-.4 1.227-.4 2.424S5.02 206 4.8 206c-.228 0-.4 1.192-.4 2.776 0 1.527-.18 2.888-.4 3.024-.548.339-.548 27.4 0 27.4.229 0 .4 1.2.4 2.8s.171 2.8.4 2.8c.222 0 .4 1.067.4 2.4s.178 2.4.4 2.4c.22 0 .4.799.4 1.776s.18 1.888.4 2.024.4.856.4 1.6.18 1.464.4 1.6.4.676.4 1.2.18 1.064.4 1.2.4.756.4 1.378c0 1.093.965 4.796 1.57 6.022.162.33.545 1.455.85 2.5s.695 1.9.867 1.9.313.45.313 1 .18 1 .4 1 .4.36.4.8.18.8.4.8.4.272.4.605.162.918.359 1.3c.198.382 1.124 2.27 2.058 4.195s1.853 3.5 2.041 3.5.342.36.342.8.18.8.4.8.4.36.4.8.18.8.4.8.4.193.4.428.54 1.213 1.2 2.172 1.2 1.897 1.2 2.084.36.599.8.916.8.897.8 1.288c0 .392.158.712.351.712.194 0 .561.505.816 1.121.256.617.863 1.571 1.349 2.12 1.726 1.95 2.602 4.759 1.484 4.759-.22 0-.4.36-.4.8s-.141.8-.313.8-.558.855-.858 1.9-.711 2.113-.913 2.372c-.203.26-.472 1.475-.598 2.7s-.385 2.228-.574 2.228-.344 1.159-.344 2.576-.18 2.688-.4 2.824-.4 1.587-.4 3.224c0 1.717.169 2.976.4 2.976.22 0 .4.72.4 1.6s.18 1.6.4 1.6.4.277.4.616c0 .946 2.386 4.184 3.083 4.184.187 0 .6.36.917.8s.897.8 1.288.8c.392 0 .712.18.712.4s.54.4 1.2.4 1.2.18 1.2.4c0 .533 8.671.533 9 0 .136-.22 1.137-.4 2.224-.4s1.976-.18 1.976-.4.72-.4 1.6-.4 1.6-.18 1.6-.4.54-.4 1.2-.4 1.2-.18 1.2-.4.45-.4 1-.4 1-.18 1-.4.36-.4.8-.4.8-.18.8-.4.278-.4.617-.4 1.003-.36 1.475-.8 1.095-.8 1.383-.8.525-.18.525-.4.288-.4.64-.4c.351 0 1.143-.54 1.76-1.2s1.325-1.2 1.574-1.2 1.056-.585 1.793-1.3c2.388-2.317 4.042-3.688 5.149-4.268.596-.312 1.084-.717 1.084-.9 0-.182.36-.332.8-.332s.8-.18.8-.4.45-.4 1-.4 1-.18 1-.4.619-.4 1.376-.4 1.488-.18 1.624-.4c.339-.548 25.4-.548 25.4 0 0 .22-.18.4-.4.4s-.4.36-.4.8-.18.8-.4.8-.4.36-.4.8-.18.8-.4.8-.4.72-.4 1.6-.18 1.6-.4 1.6c-.239 0-.4 1.533-.4 3.8s.161 3.8.4 3.8c.22 0 .4.72.4 1.6s.18 1.6.4 1.6.4.36.4.8.18.8.4.8.4.36.4.8.18.8.4.8.4.268.4.595c0 .328.315.973.7 1.434s1.016 1.212 1.403 1.67c.629.743.64.901.1 1.497-.332.367-.603.789-.603.939s-.54.837-1.2 1.528-1.2 1.499-1.2 1.796c0 .298-.18.541-.4.541s-.4.54-.4 1.2-.18 1.2-.4 1.2-.4.72-.4 1.6-.18 1.6-.4 1.6c-.243 0-.4 1.8-.4 4.6s.157 4.6.4 4.6c.22 0 .4.72.4 1.6s.18 1.6.4 1.6.4.36.4.8.18.8.4.8.4.36.4.8.18.8.4.8.4.248.4.552c0 .853 4.726 5.448 5.603 5.448a.4.4 0 0 1 .397.4c0 .22.36.4.8.4s.8.18.8.4.36.4.8.4.8.18.8.4.529.4 1.176.4 1.288.18 1.424.4c.163.264 19.871.4 57.824.4 38.117 0 57.576-.135 57.576-.4 0-.22.54-.4 1.2-.4s1.2-.18 1.2-.4.36-.4.8-.4.8-.18.8-.4.36-.4.8-.4.8-.18.8-.4.315-.404.7-.408c.886-.011 5.3-4.452 5.3-5.333 0-.363.18-.659.4-.659s.4-.36.4-.8.18-.8.4-.8.4-.36.4-.8.18-.8.4-.8.4-.72.4-1.6.18-1.6.4-1.6c.243 0 .4-1.8.4-4.6s-.157-4.6-.4-4.6c-.22 0-.4-.72-.4-1.6s-.18-1.6-.4-1.6-.4-.54-.4-1.2-.18-1.2-.4-1.2-.4-.32-.4-.712-.36-.971-.8-1.288-.8-.752-.8-.966c0-.215-.465-.875-1.033-1.468-.611-.638-.865-1.182-.623-1.331.225-.14.782.156 1.237.656 3.278 3.604 4.029 4.309 4.588 4.309.347 0 .631.18.631.4s.9.4 2 .4 2-.18 2-.4.279-.4.619-.4c.341 0 1.862-1.26 3.381-2.8s2.86-2.8 2.981-2.8c.645 0 .063 1.425-.981 2.4-.66.617-1.2 1.326-1.2 1.577s-.36.843-.8 1.315-.8 1.275-.8 1.783c0 .509-.18.925-.4.925s-.4.54-.4 1.2-.18 1.2-.4 1.2c-.248 0-.4 2.2-.4 5.8s.152 5.8.4 5.8c.22 0 .4.54.4 1.2s.18 1.2.4 1.2.4.36.4.8.18.8.4.8.4.36.4.8.18.8.4.8.4.281.4.624.18.512.4.376.4.054.4.423c0 .751 3.124 3.777 3.9 3.777.275 0 .5.147.5.326 0 .466 3.131 2.074 4.038 2.074.419 0 .762.18.762.4s.9.4 2 .4 2 .18 2 .4c0 .265 18.659.4 55.176.4 36.353 0 55.261-.136 55.424-.4.136-.22.957-.4 1.824-.4s1.576-.18 1.576-.4.54-.4 1.2-.4 1.2-.18 1.2-.4.36-.4.8-.4.8-.18.8-.4.27-.4.6-.4.6-.18.6-.4.204-.4.453-.4c.612 0 4.007-3.528 4.715-4.9.312-.605.717-1.1.9-1.1.182 0 .332-.36.332-.8s.18-.8.4-.8.4-.54.4-1.2.18-1.2.4-1.2c.251 0 .4-2.467.4-6.6s-.149-6.6-.4-6.6c-.22 0-.4-.54-.4-1.2s-.18-1.2-.4-1.2-.4-.36-.4-.8-.18-.8-.4-.8-.4-.27-.4-.6-.717-1.337-1.592-2.24c-1.708-1.76-1.696-2.64.055-3.883.406-.287.737-.742.737-1.011s.36-.749.8-1.066.8-.886.8-1.265.18-.799.4-.935.4-.687.4-1.224.18-.976.4-.976c.581 0 .524-11.371-.062-12.505-.986-1.907-1.138-2.308-1.138-3.001 0-.395-.36-.977-.8-1.294s-.8-.809-.8-1.092-.54-1.08-1.2-1.771c-1.411-1.476-1.481-1.958-.4-2.737.44-.317.8-.857.8-1.2s.36-.883.8-1.2.8-.897.8-1.288c0-.392.135-.713.3-.715.406-.004 1.3-1.983 1.3-2.877 0-.396.18-.72.4-.72.249 0 .4-2.267.4-6s-.151-6-.4-6c-.22 0-.4-.45-.4-1s-.18-1-.4-1-.4-.36-.4-.8-.18-.8-.4-.8-.4-.36-.4-.8-.18-.8-.4-.8-.4-.282-.4-.626c0-.723-4.051-4.974-4.739-4.974-.254 0-.461-.147-.461-.326 0-.466-3.131-2.074-4.038-2.074-.419 0-.762-.18-.762-.4s-.72-.4-1.6-.4-1.6-.18-1.6-.4c0-.263-9.867-.4-28.8-.4-15.84 0-28.8-.09-28.8-.201s2.43-2.627 5.4-5.592 5.4-5.653 5.4-5.975.18-.696.4-.832c.519-.321.519-2.479 0-2.8-.22-.136-.4-.57-.4-.964 0-.395-.54-1.282-1.2-1.973s-1.2-1.416-1.2-1.611-.72-1.097-1.6-2.004-1.6-1.846-1.6-2.088c0-.241-.54-.943-1.2-1.56s-1.2-1.332-1.2-1.589c0-.258-.225-.719-.5-1.026-.782-.872-1.247-1.478-2.292-2.985-.533-.77-1.294-1.691-1.689-2.047s-.719-.779-.719-.939c0-.161-.54-.797-1.2-1.414s-1.2-1.337-1.2-1.6-.54-.983-1.2-1.6-1.2-1.281-1.2-1.476-.72-1.152-1.6-2.124-1.6-1.928-1.6-2.124c0-.195-.54-.859-1.2-1.476s-1.2-1.519-1.2-2.007c0-.918 2.564-3.593 3.445-3.593.269 0 .548-.135.622-.3.181-.409 4.41-2.514 5.033-2.506.275.003.5-.174.5-.394s.36-.4.8-.4.8-.18.8-.4.36-.4.8-.4.8-.136.8-.302c0-.167.578-.558 1.284-.871 5.24-2.319 5.423-8.745.316-11.092-4.754-2.186-8.8-4.293-8.8-4.583 0-.194-.32-.352-.712-.352s-.971-.36-1.288-.8-.819-.8-1.114-.8c-1.206 0-8.486-8.907-8.486-10.382a.41.41 0 0 0-.4-.418c-.22 0-.4-.36-.4-.8s-.18-.8-.4-.8-.4-.36-.4-.8-.18-.8-.4-.8-.4-.36-.4-.8-.18-.8-.4-.8-.4-.36-.4-.8-.18-.8-.4-.8-.4-.288-.4-.64c0-1.672-2.593-3.36-5.16-3.36-1.36 0-2.44.177-2.44.4 0 .22-.36.4-.8.4s-.8.236-.8.525c0 .288-.36.911-.8 1.383s-.8 1.136-.8 1.475-.18.617-.4.617-.4.36-.4.8-.18.8-.4.8-.4.36-.4.8-.18.8-.4.8-.4.36-.4.8-.18.8-.4.8-.4.36-.4.8-.136.8-.302.8c-.167 0-.558.585-.87 1.3s-.896 1.591-1.298 1.947c-.401.356-.73.854-.73 1.107 0 .454-4.974 5.646-5.409 5.646-.124 0-.611.36-1.083.8s-1.095.8-1.383.8-.525.18-.525.4-.36.4-.8.4-.8.18-.8.4-.36.4-.8.4-.8.18-.8.4-.36.4-.8.4-.8.18-.8.4-.36.4-.8.4-.8.18-.8.4-.32.4-.711.4-1.111.28-1.6.623l-.889.622v-2.622c0-1.482-.174-2.623-.4-2.623-.22 0-.4-1.001-.4-2.224 0-1.38-.152-2.129-.4-1.976-.247.152-.4-.529-.4-1.776 0-1.113-.18-2.024-.4-2.024s-.4-.619-.4-1.376-.18-1.488-.4-1.624-.4-.867-.4-1.624-.18-1.376-.4-1.376-.4-.54-.4-1.2-.18-1.2-.4-1.2-.4-.54-.4-1.2-.18-1.2-.4-1.2-.4-.452-.4-1.005-.155-1.318-.344-1.7-.653-1.685-1.032-2.895c-.864-2.764-1.552-4.4-1.849-4.4-.127 0-.475-.9-.775-2s-.692-2-.872-2-.328-.36-.328-.8-.18-.8-.4-.8-.4-.36-.4-.8-.18-.8-.4-.8-.4-.36-.4-.8-.18-.8-.4-.8-.4-.36-.4-.8-.18-.8-.4-.8-.4-.236-.4-.525c0-.288-.36-.911-.8-1.383s-.8-1.136-.8-1.475-.18-.617-.4-.617a.41.41 0 0 1-.4-.416c0-.474-1.645-2.915-2.1-3.117-.165-.074-.3-.439-.3-.812s-.36-.938-.8-1.255-.8-.857-.8-1.2-.36-.883-.8-1.2-.8-.882-.8-1.255-.151-.738-.336-.812c-.185-.073-.994-1.075-1.798-2.226-2.028-2.903-2.569-3.564-4.966-6.07-1.155-1.207-2.1-2.345-2.1-2.529s-1.972-2.263-4.382-4.621c-6.491-6.351-8.143-7.858-10.072-9.194-.96-.665-2.286-1.678-2.946-2.251-.66-.572-1.385-1.041-1.612-1.042-.226 0-.671-.36-.988-.8s-.831-.8-1.141-.8-.856-.316-1.212-.703-1.142-.957-1.747-1.267c-.605-.311-1.1-.715-1.1-.898 0-.182-.27-.332-.6-.332s-.6-.18-.6-.4-.27-.4-.6-.4-.6-.18-.6-.4-.27-.4-.6-.4-.6-.18-.6-.4-.278-.4-.617-.4-1.003-.36-1.475-.8-1.095-.8-1.383-.8-.525-.18-.525-.4-.36-.4-.8-.4-.8-.18-.8-.4-.36-.4-.8-.4-.8-.18-.8-.4.275-.4.611-.4c1.294 0 4.989-4.439 4.989-5.995 0-.443.18-.805.4-.805.253 0 .4-2.925.4-7.976 0-4.887-.155-8.073-.4-8.224-.22-.136-.4-.527-.4-.87 0-.729-2.716-3.33-3.478-3.33-.287 0-.522-.18-.522-.4s-.36-.4-.8-.4-.8-.18-.8-.4-.54-.4-1.2-.4-1.2-.18-1.2-.4-.54-.4-1.2-.4-1.2-.18-1.2-.4-.619-.4-1.376-.4-1.488-.18-1.624-.4-1.047-.4-2.024-.4-1.776-.18-1.776-.4c0-.222-1.067-.4-2.4-.4s-2.4-.178-2.4-.4c0-.22-.36-.4-.8-.4-1.02 0-1.02-.465 0-1.2.44-.317.8-.825.8-1.128s.54-1.055 1.2-1.672 1.2-1.253 1.2-1.414c0-.16.315-.584.7-.94.796-.737 2.041-2.704 2.371-3.746.122-.385.381-.7.576-.7s.353-.36.353-.8.18-.8.4-.8.4-.36.4-.8.18-.8.4-.8.4-.36.4-.8.18-.8.4-.8.4-.36.4-.8.18-.8.4-.8.4-.349.4-.776.166-.879.369-1.005.488-.766.632-1.424.428-1.195.631-1.195c.202 0 .368-.36.368-.8s.135-.801.3-.803c.365-.004 1.3-1.946 1.3-2.7 0-.299.18-.433.4-.297.228.141.4-.204.4-.8 0-.576.15-.955.332-.842s.577-.416.875-1.176.689-1.382.868-1.382.325-.36.325-.8.18-.8.4-.8.4-.36.4-.8.18-.8.4-.8.4-.36.4-.8.18-.8.4-.8.4-.36.4-.8.18-.8.4-.8.4-.36.4-.8.18-.8.4-.8c.231 0 .4-1.267.4-3s-.169-3-.4-3c-.22 0-.4-.36-.4-.8q0-.8-.8-.8c-.44 0-.8-.18-.8-.4 0-.229-1.2-.4-2.8-.4s-2.8.171-2.8.4c0 .22-.45.4-1 .4s-1 .18-1 .4c0 .242-1.733.4-4.4.4s-4.4-.158-4.4-.4c0-.22-.54-.4-1.2-.4s-1.2-.18-1.2-.4-.345-.4-.767-.4c-.421 0-.826-.163-.9-.362-.073-.199-.583-.424-1.133-.5s-1.349-.453-1.775-.838c-.427-.385-1.012-.7-1.3-.7s-.525-.18-.525-.4-.193-.4-.428-.4-1.18-.506-2.1-1.125c-2.138-1.439-5.957-3.275-6.812-3.275-.363 0-.66-.18-.66-.4s-.54-.4-1.2-.4-1.2-.18-1.2-.4-.54-.4-1.2-.4-1.2-.18-1.2-.4-.641-.4-1.424-.4c-.847 0-1.323-.162-1.176-.4.153-.248-.596-.4-1.976-.4-1.223 0-2.224-.18-2.224-.4 0-.251-2.467-.4-6.6-.4s-6.6.149-6.6.4m15.129 10.853c3.958.972 7.194 2.365 11.368 4.894 7.509 4.55 13.436 6.912 18.416 7.339 1.492.128 2.798.371 2.903.54.164.265-6.829 14.37-9.407 18.974-4.623 8.257-13.349 15.434-21.609 17.773-.99.281-2.213.672-2.719.869-2.076.809-3.008.485-2.706-.942.151-.715.428-2.11.615-3.1a2141 2141 0 0 1 1.592-8.4c.191-.99.551-2.88.8-4.2s.609-3.21.8-4.2.543-2.835.783-4.1c1.102-5.824 1.333-7.016 1.687-8.7.208-.99.478-3.24.6-5l.223-3.2-1.338-1.275c-1.337-1.275-5.419-3.496-7.717-4.2-3.314-1.015-5.551-1.5-9.103-1.974-2.136-.285-3.786-.616-3.668-.735 1.34-1.347 13.503-1.586 18.48-.363M142.2 43.212c.88.242 2.381.729 3.335 1.082l1.735.642-.255 1.832c-.14 1.008-.591 3.542-1.002 5.632-1.197 6.093-1.941 9.994-3.852 20.2-.989 5.28-1.891 9.915-2.006 10.3-.284.951-18.416 1.028-23.661.101-15.191-2.687-24.484-11.165-31.432-28.676-1.537-3.874-1.527-4.008.268-3.475 9.177 2.727 19.096 1.671 29.47-3.138 10.308-4.778 20.39-6.434 27.4-4.5M172 88.811c6.279.637 13.925 1.924 15.108 2.544l1.045.548-1.176.237c-25.898 5.229-77.607 5.377-103.693.296-4.15-.808-2.435-1.459 7.916-3.005 7.716-1.152 10.756-1.206 13.2-.234 8.2 3.262 10.924 3.603 28.773 3.602 17.906-.002 22.575-.618 30.055-3.967.978-.438 2.26-.683 3.117-.595zm-92.346 12.131c4.036.955 6.302 1.376 9.946 1.851 1.87.243 3.94.533 4.6.644 5.444.918 28.625 2.153 40.502 2.158 18.974.009 39.944-1.578 51.298-3.882 3.652-.742 5.605-1.156 6.4-1.36 1.331-.34.96 2.285-.477 3.374-10.976 8.317-52.624 12.084-87.323 7.897-13.697-1.653-27.796-6.214-28.823-9.324-.329-.996.198-2.395.813-2.159.285.109 1.664.47 3.064.801m250.385 8.486c-1.194 1.005-5.239 8.698-5.239 9.964 0 .335-.18.608-.4.608s-.4.32-.4.712-.36.971-.8 1.288-.8.829-.8 1.138-.929 1.395-2.064 2.412a128 128 0 0 0-3.387 3.15c-.727.715-1.598 1.3-1.936 1.3s-.613.18-.613.4-.236.4-.525.4c-.288 0-.911.36-1.383.8s-1.136.8-1.475.8-.617.18-.617.4-.36.4-.8.4-.8.18-.8.4-.27.4-.6.4-.6.18-.6.4-.36.4-.8.4-.8.18-.8.4-.272.4-.605.4c-1.584 0-4.195 2.354-4.195 3.782 0 .56-.18 1.018-.4 1.018-.503 0-.517.994-.026 1.905.205.382.609 1.28.897 1.995.312.774.808 1.3 1.227 1.3.386 0 .702.18.702.4s.36.4.8.4.8.18.8.4.36.4.8.4.8.18.8.4.36.4.8.4.8.18.8.4.27.4.6.4.6.18.6.4.36.4.8.4.8.18.8.4.36.4.8.4.8.18.8.4.225.4.5.401c.275 0 1.13.54 1.9 1.199s1.539 1.199 1.709 1.199c.41.001 4.691 4.294 4.691 4.704 0 .176.36.58.8.897s.8.897.8 1.288c0 .392.159.712.354.712s.654.675 1.02 1.5.836 1.813 1.045 2.195c.21.382.381.967.381 1.3s.18.605.4.605.4.36.4.8.18.8.4.8.4.36.4.8.18.8.4.8.4.36.4.8.18.8.4.8.401.225.403.5c.01 2.004 6.277 2.611 8.253.8 1.186-1.086 4.144-6.723 4.144-7.895 0-.333.18-.605.4-.605s.4-.36.4-.8.18-.8.4-.8.4-.36.4-.8.15-.8.332-.8.588-.495.9-1.1.928-1.478 1.368-1.94 1.16-1.283 1.6-1.824 1.43-1.415 2.2-1.941 1.691-1.281 2.047-1.676.941-.719 1.3-.719.653-.18.653-.4.27-.4.6-.4.6-.18.6-.4.27-.4.6-.4.6-.18.6-.4.315-.404.7-.409 1.15-.361 1.7-.791 1.242-.786 1.538-.791 1.016-.33 1.6-.723a23 23 0 0 1 2.262-1.3c1.568-.766 2.2-1.385 2.2-2.157 0-.346.18-.629.4-.629s.4-.871.4-1.936c0-2.065-2.644-5.664-4.16-5.664-.352 0-.64-.18-.64-.4s-.36-.4-.8-.4-.8-.18-.8-.4-.36-.4-.8-.4-.8-.18-.8-.4-.36-.4-.8-.4-.8-.18-.8-.4-.36-.4-.8-.4-.8-.136-.8-.302c0-.167-.585-.562-1.3-.878-.715-.317-1.649-.9-2.075-1.298-.427-.397-.918-.722-1.091-.722-.174 0-1.338-.99-2.587-2.2s-2.423-2.2-2.609-2.2-.338-.32-.338-.712-.36-.971-.8-1.288-.8-.897-.8-1.288c0-.392-.135-.713-.3-.715-.359-.004-1.3-1.941-1.3-2.677 0-.286-.18-.52-.4-.52s-.4-.182-.4-.405c0-.977-2.982-6.478-4.11-7.581-1.727-1.689-5.551-1.784-7.451-.186m-240.865 8.79c4.296 1.01 5.702 1.307 8.226 1.74 19.392 3.322 41.802 3.767 65.727 1.307 3.319-.341 3.662-.135 2.498 1.499-.454.638-.825 1.259-.825 1.38 0 .122-.504 1.084-1.121 2.138-3.448 5.898-8.079 19.172-8.079 23.156 0 1.102.316 1.758 1.336 2.778 3.098 3.098 6.746 1.781 8.036-2.901 1.815-6.588 2.261-7.988 3.667-11.515 2.297-5.76 7.666-15 8.715-15 .8 0 6.316 9.783 8.807 15.617.419.981 1.202 2.773 1.74 3.983 2.341 5.259 6.302 17.436 7.709 23.699.944 4.197 2.949 5.935 6.152 5.335 4.009-.753 4.292-3.568 1.389-13.834-.218-.77-.546-1.94-.73-2.6-.454-1.628-2.583-7.983-3.417-10.2-2.774-7.364-7.034-16.536-10.252-22.07-2.351-4.044-2.058-4.09 4.407-.688 9.183 4.831 16.752 10.252 26.187 18.758 9.229 8.319 21.889 26.535 26.41 38 .39.99.945 2.34 1.233 3 1.151 2.638 3.01 7.882 3.829 10.8l.786 2.8c1.42 5.057 3.177 14.259 3.189 16.7l.007 1.5h-10.404l.248-3.9c.594-9.328-2.991-16.053-10.555-19.801l-3.429-1.699H115.4l-3.2 1.562c-11.595 5.659-14.61 20.907-6.152 31.11 1.802 2.173 1.838 2.35.694 3.366-6.785 6.022-7.046 19.244-.524 26.498 2.133 2.372 2.1 2.028.369 3.92-7.086 7.745-6.944 19.472.33 27.224l1.201 1.28-1.214 1.383c-5.163 5.88-6.957 13.857-4.548 20.216 1.133 2.989 1.774 2.841-12.316 2.841-17.846 0-22.061 1.227-30.162 8.779-7.768 7.241-21.135 11.978-25.389 8.998-2.158-1.511-.824-10.283 2.672-17.577 2.996-6.25 3.074-8.148.492-11.968-.799-1.183-2.909-4.284-4.688-6.891-14.909-21.848-21.856-48.579-19.164-73.741.705-6.587 1.441-11.417 2.195-14.4.194-.77.569-2.3.833-3.4.467-1.951 1.519-5.545 2.587-8.834 1.881-5.8 6.47-15.946 9.455-20.907.841-1.397 1.529-2.619 1.529-2.715 0-.316 4.906-7.49 6.936-10.144 10.809-14.128 24.921-25.924 40.064-33.489 8.544-4.269 7.71-4.049 11.774-3.093m246.017 8.31c.06 2.221 9.236 11.211 13.895 13.615 1.673.862 1.412 1.358-1.603 3.053-3.278 1.843-10.028 8.605-11.883 11.904-1.528 2.72-2.106 2.923-3.127 1.1-2.672-4.766-7.969-10.131-13.429-13.6l-2.357-1.497 2.157-1.313c5.31-3.233 8.937-6.706 12.43-11.9l2.43-3.613.739.961c.407.529.743 1.11.748 1.29M230 198c4.994 2.997 7.326 10.69 4.46 14.716l-.914 1.284h-32.105l-1.878 2-1.878 2h-39.609c-37.731 0-39.692-.035-41.346-.744-8.876-3.805-7.848-17.647 1.47-19.785 2.455-.564 110.834-.05 111.8.529m66.161 2.07c2.711 4.822 8.323 10.388 13.317 13.208 2.415 1.364 2.388 1.743-.226 3.187-4.412 2.438-10.005 8.002-12.886 12.819-1.493 2.497-2.259 3.077-2.651 2.009-1.663-4.529-12.88-15.693-15.766-15.693-.192 0-.349-.36-.349-.8s.188-.8.418-.8c2.86 0 14.037-11.174 15.697-15.693.391-1.064 1.174-.499 2.446 1.763M238.8 223.266c0 .256-1.404 2.191-3.119 4.3s-5.896 7.254-9.291 11.434-6.393 7.829-6.662 8.109-1.335 1.586-2.368 2.9c-2.665 3.392-2.327 3.942-4.554-7.409-.259-1.32-.622-3.12-.806-4s-.544-2.68-.8-4a272 272 0 0 0-.806-4c-.964-4.527-1.272-6.62-1.057-7.18.309-.806 29.463-.959 29.463-.154m35.403.59c3.132 1.656 5.999 4.117 8.789 7.544 2.778 3.413 2.76 3.124.805 12.841-1.886 9.371-1.704 9.052-3.67 6.447-.701-.929-1.604-2.048-2.007-2.488-.404-.44-3.062-3.68-5.908-7.2-2.845-3.52-5.275-6.49-5.399-6.6-.772-.686-8.317-10.328-8.529-10.9-.494-1.334 13.307-1.026 15.919.356m-84.036 3.69c.178.288-1.609 2.942-3.167 4.704-.22.249-3.092 3.985-6.381 8.301l-5.981 7.849h-27.504c-26.444 0-27.586-.031-29.623-.793-8.935-3.343-9.01-16.171-.114-19.594 2.168-.835 72.265-1.284 72.77-.467m61.328 2.768c1.372 1.697 7.066 8.666 12.653 15.486s10.08 12.535 9.982 12.7c-.268.453-51.33.374-51.33-.079 0-.337 5.511-7.229 13.78-17.234a809 809 0 0 0 7.02-8.676c4.947-6.2 4.712-6.134 7.895-2.197m-50.379 1.386c.23.935.631 2.78.89 4.1s.638 3.21.841 4.2c2.137 10.385 3.538 18.101 3.344 18.415-.329.531-26.862.518-27.19-.014-.136-.219.528-1.367 1.476-2.55a340 340 0 0 0 3.824-4.901 5215 5215 0 0 1 7.947-10.35c3.215-4.18 6.32-8.268 6.899-9.085 1.337-1.885 1.46-1.874 1.969.185m107.159 13.552c3.039 3.988 5.705 7.453 5.925 7.7 1.318 1.476 3.8 4.994 3.8 5.385 0 .529-27.013.69-27.338.163-.171-.277 1.704-10.506 1.99-10.856.07-.086.868-.198 1.774-.249 2.417-.137 3.55-1.233 5.721-5.536 1.071-2.122 2.094-3.859 2.275-3.859.18 0 2.814 3.263 5.853 7.252m-141.372 12.584c.13.13-.364 1.023-1.098 1.985-2.876 3.767-2.59 4.469 4.973 12.222 3.089 3.166 5.618 5.982 5.619 6.257.007 1.19-57.608.4-59.891-.822-7.889-4.221-7.392-15.882.812-19.036 2.053-.789 48.83-1.361 49.585-.606m42.819 11.464a1005 1005 0 0 1 4.758 10.3c.767 1.705 1.273 2.82 3.629 8 .551 1.21 1.364 3.01 1.808 4s2.606 5.76 4.804 10.6c3.808 8.384 4.767 10.5 7.096 15.649.56 1.238.912 2.355.784 2.483-.316.316-51.801-51.198-51.801-51.831 0-.392 3.08-.501 14.154-.501h14.155zm67.478-.937c0 .329-.457 1.397-3.141 7.337a633 633 0 0 0-1.701 3.8 305 305 0 0 1-1.958 4.3 318 318 0 0 0-2.003 4.4 640 640 0 0 1-3.996 8.8c-.71 1.54-2.422 5.32-3.805 8.4-3.607 8.037-4.541 10.1-5.797 12.8a305 305 0 0 0-2 4.4c-.486 1.1-1.495 3.3-2.241 4.889-.747 1.588-1.358 3.073-1.358 3.3 0 1.124-1.281.187-2.035-1.489-.47-1.045-1.284-2.845-1.81-4a3403 3403 0 0 1-6.841-15.1c-.99-2.2-2.501-5.503-3.357-7.34s-1.557-3.394-1.557-3.46c0-.116-2.225-5.003-4.189-9.2-.514-1.1-1.331-2.9-1.815-4s-1.128-2.54-1.431-3.2c-3.941-8.59-6.456-14.453-6.305-14.698.272-.439 57.34-.379 57.34.061m39.2-.062c0 .515-51.954 52.279-52.212 52.021-.134-.134-.056-.577.172-.983.389-.693 2.125-4.434 3.96-8.539a9515 9515 0 0 1 11.915-26.3 795 795 0 0 0 4.033-8.9c.537-1.21 1.538-3.415 2.225-4.9l1.249-2.7h14.329c7.881 0 14.329.136 14.329.301m-119.549 29.565c5.673 5.646 10.222 10.416 10.108 10.6-.509.823-87.967.388-89.916-.448-9.566-4.1-8.071-17.995 2.157-20.045.77-.155 16.236-.302 34.368-.327l32.968-.046zm183.817-9.13c8.238 3.726 8.205 15.333-.056 19.216-1.848.869-90.612 1.408-90.612.551 0-.164 4.635-4.938 10.3-10.61l10.3-10.312 34 .11 34 .109zM224.98 326.204c4.521 4.512 8.22 8.304 8.22 8.426 0 1.167-2.477 3.103-5.2 4.064-1.959.691-106.161.732-109.147.043-8.506-1.964-10.872-13.11-3.899-18.38 3.076-2.325 1.503-2.257 53.526-2.309l48.279-.048zm154.727-7.574c7.222 2.461 9.468 11.784 4.168 17.296-1.184 1.232-1.816 1.604-4.794 2.818-2.293.935-107.846.618-110.345-.331-2.013-.765-4.736-2.943-4.736-3.788 0-.23 3.643-4.064 8.096-8.521l8.097-8.104h48.832c43.392 0 49.038.07 50.682.63m-150.056 30.334c8.988 3.756 7.583 18.144-1.971 20.183-3.52.752-106.808.622-109.662-.137-9.031-2.404-10.5-15.648-2.195-19.791 2.093-1.044 111.354-1.289 113.828-.255m151.226.086c7.62 1.657 7.925 15.279.425 19.005L379.4 369h-55c-52.321 0-55.074-.035-56.516-.726-8.362-4.007-8.287-16.436.116-19.277 1.823-.616 110.032-.565 112.877.053"
            ></path>
            <path
              fill="#54d664"
              d="M163.228 88.832c-7.48 3.349-12.149 3.965-30.055 3.967-17.849.001-20.573-.34-28.773-3.602-2.444-.972-5.484-.918-13.2.234-10.351 1.546-12.066 2.197-7.916 3.005 26.086 5.081 77.795 4.933 103.693-.296l1.176-.237-1.045-.548c-1.183-.62-8.829-1.907-15.108-2.544l-5.655-.574c-.857-.088-2.139.157-3.117.595m-66.828.621c0 .139-.375.579-.834.977-.829.718-.786 2.37.061 2.37.205 0 .373.196.373.436 0 .477-2.767.314-7.2-.425-1.43-.239-3.5-.566-4.6-.729-2.892-.427.027-1.253 7.068-2.002 1.468-.156 2.803-.418 2.967-.582.362-.362 2.165-.4 2.165-.045m-20.591 11.318c-.829 2.613 3.96 5.378 13.863 8.004 30.13 7.99 88.873 5.09 102.251-5.048 1.437-1.089 1.808-3.714.477-3.374-12.495 3.194-35.154 5.253-57.698 5.242-11.877-.005-35.058-1.24-40.502-2.158-.66-.111-2.73-.401-4.6-.644-4.3-.56-11.249-1.976-13.01-2.652-.286-.11-.636.173-.781.63M235.32 207.6c0 1.21.075 1.705.167 1.1a9 9 0 0 0 0-2.2c-.092-.605-.167-.11-.167 1.1m-17.12 6-15.6.214 15.476.093c9.988.06 15.564-.049 15.724-.307.136-.22.192-.358.124-.307s-7.144.189-15.724.307m-8.738 9.5c-.103.165 6.388.251 14.423.19 13.163-.099 14.584-.047 14.366.521-.139.364-.074.527.154.386.217-.134.395-.504.395-.821 0-.63-28.95-.903-29.338-.276m48.64-.064c.273.272 13.974.221 14.249-.053.1-.101-3.118-.183-7.151-.183s-7.227.106-7.098.236m-139.388 4.492c-.377.15 11.773.223 27 .163 15.227-.061 31.437-.061 36.023 0l8.336.109-.875 1.2-.876 1.2 1.045-1.129c.574-.621.941-1.296.815-1.5-.264-.428-70.391-.47-71.468-.043m-2.547.986c-1.434.836-2.755 2.038-3.678 3.348-1.309 1.858-1.084 2.124.252.298 1.341-1.832 2.219-2.628 3.859-3.494.66-.349 1.02-.635.8-.636s-.775.217-1.233.484m69.777 4.586c-1.269 1.532-1.725 2.242-1.263 1.965.512-.307 2.288-2.665 2.008-2.665-.091 0-.426.315-.745.7m-74.895 1.515c-.137.358-.228 1.131-.203 1.718.034.799.124.665.358-.533.331-1.7.258-2.26-.155-1.185m72.495 1.685c-1.151 1.389-1.638 2.1-1.44 2.1.11 0 .682-.63 1.269-1.4 1.09-1.429 1.222-1.968.171-.7m118.218 2.162c-.182.294-.109.353.201.161.275-.17.869.021 1.362.438l.875.739-.762-.9c-.854-1.009-1.258-1.115-1.676-.438m-190.956.971c.003.642.178 1.437.389 1.767.26.409.304.09.137-1-.303-1.977-.534-2.314-.526-.767m67.307 3.96-3.513 4.592-28.286-.092c-15.557-.051-27.977.029-27.6.179.377.149 13.117.284 28.311.3l27.625.028.82-1.1c.452-.605 2.111-2.765 3.688-4.8s2.777-3.7 2.667-3.7-1.781 2.067-3.712 4.593m-65.294.804c1.03 1.414 3.696 3.377 4.581 3.373.22-.001-.14-.285-.8-.632-.66-.346-1.911-1.284-2.781-2.084s-1.32-1.095-1-.657m93.213 13.298-.032.894-13.5.111-13.5.111 13.513.095c14.16.099 14.423.068 13.756-1.593-.113-.282-.22-.11-.237.382m67.33.005.762.9-25.762.097-25.762.097 25.577.106c25.881.107 26.961.051 25.332-1.329l-.909-.771zm17.141.5c.141.518 2.037.601 13.93.608l13.767.008-13.58-.113c-10.22-.086-13.666-.236-13.93-.608-.257-.362-.307-.334-.187.105M180.8 268.501c0 .658 51.492 52.141 51.821 51.812.139-.139.061-.581-.172-.983-.322-.553-.428-.585-.437-.131-.012.581-50.812-49.9-50.812-50.493 0-.163 6.345-.345 14.1-.406l14.1-.111-14.3-.094c-11.241-.075-14.3.012-14.3.406m39.062-.201c-.102.165 12.61.253 28.249.195 22.564-.084 28.501-.001 28.756.4.232.365.322.311.327-.195.006-.741-56.876-1.138-57.332-.4m67.405.8c-.454 1.085-.451 1.087.185.2l.646-.9h13.751c7.563 0 13.751.136 13.751.301 0 .496-50.141 50.375-50.9 50.634-.684.235-.995 1.065-.399 1.065.392 0 52.099-51.709 52.099-52.101 0-.165-6.451-.299-14.336-.299h-14.336zM154.8 278.4l-21.4.211 21.5.094c14.13.063 21.5-.042 21.5-.305 0-.22-.045-.357-.1-.305s-9.73.189-21.5.305m126.065 4.617c-.67 1.471-.542 1.785.182.448.339-.625.541-1.211.449-1.302-.091-.092-.375.293-.631.854m-64.431 1.583c0 .22.344 1.03.766 1.8s.766 1.22.766 1-.344-1.03-.766-1.8-.766-1.22-.766-1m62.031 3.617c-.67 1.471-.542 1.785.182.448.339-.625.541-1.211.449-1.302-.091-.092-.375.293-.631.854m-159.265-.264c-.77.136 14.108.247 33.062.247s34.378-.135 34.276-.3c-.22-.357-65.309-.306-67.338.053m181.097 9.95c-5.663 5.666-10.297 10.436-10.297 10.6 0 .386 88.855.377 89.462-.009.254-.162-19.726-.247-44.4-.19l-44.862.105 10.195-10.202 10.195-10.202 33.205-.105 33.205-.105-33.203-.097-33.203-.098zm-184.14-8.871c-.684.337-1.854 1.267-2.6 2.066-1.287 1.379-1.256 1.367.599-.222 1.076-.922 2.191-1.676 2.477-1.676s.631-.18.767-.4c.319-.516.242-.501-1.243.232m71.158-.432c.157.22 4.65 4.765 9.985 10.1l9.7 9.701-44.662-.101c-24.564-.055-44.454.032-44.2.194.636.405 88.566.385 88.816-.019.111-.179-4.327-4.814-9.861-10.3s-9.934-9.795-9.778-9.575m194.485.857c2.037 1.807 2.787 2.334 2.002 1.406-.436-.515-1.155-1.122-1.598-1.349-.442-.227-.624-.252-.404-.057m3.237 3.543c.36.55.72 1 .8 1s-.059-.45-.31-1c-.25-.55-.611-1-.8-1s-.051.45.31 1m-164.209 1.2c0 .22.258.85.572 1.4s.572.82.572.6-.258-.85-.572-1.4-.572-.82-.572-.6m-109.761.467c-.147.146-.252.731-.233 1.3.034 1.014.041 1.012.387-.147.364-1.217.31-1.618-.154-1.153m274.961.409c.09 1.039.716 1.92.744 1.048.015-.482-.152-.988-.372-1.124s-.387-.102-.372.076M274.8 296.084c0 .12-.272.87-.605 1.667s-.516 1.449-.406 1.449c.317 0 1.444-2.9 1.216-3.128-.113-.113-.205-.107-.205.012m111.646 3.983c-.025.367-.15.997-.276 1.4-.218.695-.207.696.227.02.251-.391.376-1.021.276-1.4-.162-.619-.185-.621-.227-.02m-275.64.566c.003.422.189 1.037.412 1.367.297.438.334.276.138-.6-.329-1.471-.558-1.79-.55-.767m.794 2.411c0 .233.585 1.048 1.3 1.813s1.013 1.019.662.566a41 41 0 0 1-1.3-1.812c-.364-.544-.662-.799-.662-.567m3.2 3.71c0 .329 2.009 1.37 2.226 1.153.067-.067-.406-.425-1.052-.796s-1.174-.531-1.174-.357m2 42.046c-.795.514.204.514 1.4 0l.8-.344-.8-.022c-.44-.012-1.07.153-1.4.366m152.088-.06c-.502.143 24.428.265 55.4.271 34.605.007 49.219-.087 37.912-.244-24.367-.338-92.154-.357-93.312-.027m-155.499 2.249c-.984.985-1.789 2.01-1.789 2.278s.451-.123 1.002-.87c.552-.748 1.542-1.7 2.2-2.117 1.261-.798 1.466-1.08.787-1.08-.225 0-1.215.805-2.2 1.789m152.555-.965-.944.823 1.2-.702c1.579-.925 1.603-.945 1.111-.945-.232 0-.847.371-1.367.824m116.856.101c0 .069.585.654 1.3 1.3l1.3 1.175-1.175-1.3c-1.095-1.212-1.425-1.484-1.425-1.175m-271.846 4.452c-.122.317-.151.902-.065 1.3.098.451.235.235.365-.577.217-1.362.076-1.704-.3-.723m275.304 1.023c.317 1.725.544 2.051.536.767-.003-.532-.183-1.237-.4-1.567-.276-.422-.317-.185-.136.8m-124.406.5c-.314 1.172-.27 3.912.076 4.785.15.377.272-.748.272-2.5 0-3.528-.005-3.563-.348-2.285m-26.524 2.7c0 1.43.073 2.015.161 1.3s.089-1.885 0-2.6c-.088-.715-.161-.13-.161 1.3m-124.819 0c0 .99.078 1.395.173.9a5.7 5.7 0 0 0 0-1.8c-.095-.495-.173-.09-.173.9m275.945 1.467a8 8 0 0 1-.284 1.6c-.218.694-.206.695.226.021.251-.391.379-1.111.285-1.6-.172-.887-.172-.887-.227-.021M110.8 362.11c0 .573.187 1.158.416 1.3.273.169.322-.133.144-.876-.368-1.533-.56-1.678-.56-.424m274.045 2.417c-.451.73-1.499 1.81-2.328 2.4S381.191 368 381.414 368c.682 0 3.145-2.24 3.909-3.556.968-1.668.56-1.597-.478.083m-273.245-.206c0 .961 4.916 4.896 5.45 4.362.097-.096-.366-.4-1.027-.674-.662-.274-1.927-1.284-2.813-2.244-.885-.961-1.61-1.611-1.61-1.444m151.6-.066c0 .213.675 1.008 1.5 1.767l1.5 1.378-1.4-1.596c-.77-.877-1.445-1.672-1.5-1.766s-.1.003-.1.217m-144.324 5.005c1.19.335 106.943.328 108.492-.007.642-.139-23.713-.253-54.124-.253s-54.876.117-54.368.26m179.224-.16c14.465.058 38.135.058 52.6 0s2.63-.106-26.3-.106-40.765.048-26.3.106"
            ></path>
          </g>
        </svg>
      </Icon>
      <ConnectButton />
    </Flex>
  );
};

export default Header;
