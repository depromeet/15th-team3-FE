import { Interpolation, Theme } from '@emotion/react';
import { HTMLAttributes } from 'react';

interface OnwerCharacterProps extends HTMLAttributes<SVGSVGElement> {
  css?: Interpolation<Theme>;
}
export const OnwerCaracter = ({ css, ...rest }: OnwerCharacterProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={321}
    height={282}
    fill="none"
    viewBox="0 0 321 282"
    css={css}
    {...rest}
  >
    <path
      fill="#FFD7C1"
      fillRule="evenodd"
      d="M234.684 257.059c0 .959.082 3.543 1.039 3.601 10.636.647 18.277 2.428 18.277 4.523 0 2.096-7.64 3.876-18.274 4.523-.958.058-1.04 2.642-1.04 3.601 0 2.642-12.141 4.783-27.118 4.783-5.601 0-10.805-.299-15.126-.812-2.122-.252-4.909.854-6.935 1.532-4.542 1.52-13.588 2.557-24.007 2.557-10.419 0-19.466-1.037-24.008-2.557-2.026-.678-4.812-1.784-6.934-1.532-4.321.513-9.525.812-15.126.812-14.977 0-27.118-2.141-27.118-4.783 0-.959-.082-3.543-1.04-3.601C76.64 269.059 69 267.278 69 265.183c0-2.095 7.64-3.876 18.277-4.523.957-.058 1.039-2.642 1.039-3.601 0-2.642 12.141-4.783 27.119-4.783 5.601 0 10.806.299 15.128.813 2.121.252 4.905-.854 6.93-1.532 4.541-1.52 13.589-2.557 24.009-2.557 10.422 0 19.471 1.037 24.011 2.558 2.025.678 4.805 1.782 6.925 1.531 4.321-.514 9.526-.813 15.127-.813 14.978 0 27.119 2.141 27.119 4.783Z"
      clipRule="evenodd"
    />
    <path
      fill="#FF7664"
      fillRule="evenodd"
      d="M213 0c-14.912 0-27 12.088-27 27 0 11.14 6.746 20.704 16.376 24.83v12.764c0 2.56 3.002 3.944 4.949 2.28L222.385 54H294c14.912 0 27-12.088 27-27S308.912 0 294 0h-81Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M232.869 24.7c.337 0 .652.063.943.19.301.128.561.297.78.506.219.21.392.46.519.752.128.292.192.602.192.93v3.897c0 .355-.078.674-.233.957a3.584 3.584 0 0 1-.56.793c-1.112.92-2.224 1.576-3.336 1.968-1.103.383-2.242.57-3.418.56a8.485 8.485 0 0 1-2.297-.34 9.382 9.382 0 0 1-2.105-.917 9.237 9.237 0 0 1-1.805-1.408 9.483 9.483 0 0 1-1.422-1.819 9.453 9.453 0 0 1-.916-2.16 8.707 8.707 0 0 1-.328-2.406c0-.83.105-1.631.314-2.406.21-.775.506-1.5.889-2.174a8.957 8.957 0 0 1 1.381-1.86 9.224 9.224 0 0 1 1.818-1.435 8.856 8.856 0 0 1 2.147-.93 8.386 8.386 0 0 1 2.406-.341c1.322 0 2.511.228 3.568.683 1.067.447 2.051 1.117 2.953 2.01.237.228.415.488.534.78.118.282.177.578.177.888 0 .3-.059.602-.177.902a2.255 2.255 0 0 1-.534.78 2.383 2.383 0 0 1-.793.533 2.575 2.575 0 0 1-.902.191c-.31.01-.615-.04-.916-.15a2.301 2.301 0 0 1-.793-.506c-.447-.428-.925-.734-1.435-.916a4.597 4.597 0 0 0-1.627-.287c-.566 0-1.099.11-1.6.328-.501.21-.939.506-1.313.889a4.394 4.394 0 0 0-.902 1.326 4.15 4.15 0 0 0-.328 1.654c0 .565.105 1.103.314 1.613.21.51.497.962.862 1.354.373.383.811.688 1.312.916a4.208 4.208 0 0 0 1.668.355c.228 0 .447-.004.656-.013.21-.01.415-.032.616-.069.209-.036.414-.09.615-.164.2-.082.41-.187.629-.314v-.328h-.192a2.328 2.328 0 0 1-1.695-.711 2.626 2.626 0 0 1-.506-.766c-.118-.3-.177-.62-.177-.957 0-.328.059-.638.177-.93.128-.3.297-.56.506-.779.21-.219.46-.392.752-.52.292-.136.606-.204.943-.204l2.639.054Zm8.436 3.882c0 .255.05.492.15.711.1.21.233.396.397.56.173.155.364.278.574.37a1.8 1.8 0 0 0 1.381 0c.218-.092.41-.215.574-.37.164-.164.296-.35.396-.56.101-.219.151-.456.151-.711 0-.255-.05-.488-.151-.697a1.532 1.532 0 0 0-.396-.56 1.8 1.8 0 0 0-2.529 0 1.782 1.782 0 0 0-.397.56c-.1.21-.15.442-.15.697Zm-4.867 0c0-.911.177-1.773.533-2.584a7.029 7.029 0 0 1 1.435-2.133 6.76 6.76 0 0 1 2.119-1.435 6.371 6.371 0 0 1 2.584-.534 6.4 6.4 0 0 1 2.598.534 6.55 6.55 0 0 1 2.119 1.435 6.816 6.816 0 0 1 1.422 2.133c.356.811.533 1.673.533 2.584 0 .912-.177 1.773-.533 2.584a6.694 6.694 0 0 1-1.422 2.106 6.85 6.85 0 0 1-2.119 1.435 6.544 6.544 0 0 1-2.598.52 6.515 6.515 0 0 1-2.584-.52 7.082 7.082 0 0 1-2.119-1.435 6.903 6.903 0 0 1-1.435-2.106 6.358 6.358 0 0 1-.533-2.584Zm19.414 0c0 .255.05.492.15.711.1.21.232.396.396.56.174.155.365.278.575.37a1.8 1.8 0 0 0 1.381 0c.218-.092.41-.215.574-.37.164-.164.296-.35.396-.56.1-.219.151-.456.151-.711 0-.255-.051-.488-.151-.697a1.532 1.532 0 0 0-.396-.56 1.8 1.8 0 0 0-1.955-.383 1.763 1.763 0 0 0-.575.382 1.779 1.779 0 0 0-.396.56c-.1.21-.15.443-.15.698Zm-4.868 0c0-.911.178-1.773.534-2.584a7.029 7.029 0 0 1 1.435-2.133 6.76 6.76 0 0 1 2.119-1.435 6.368 6.368 0 0 1 2.584-.534 6.4 6.4 0 0 1 2.598.534 6.56 6.56 0 0 1 2.119 1.435 6.816 6.816 0 0 1 1.422 2.133c.355.811.533 1.673.533 2.584 0 .912-.178 1.773-.533 2.584a6.694 6.694 0 0 1-1.422 2.106 6.863 6.863 0 0 1-2.119 1.435 6.544 6.544 0 0 1-2.598.52 6.512 6.512 0 0 1-2.584-.52 7.082 7.082 0 0 1-2.119-1.435 6.903 6.903 0 0 1-1.435-2.106 6.36 6.36 0 0 1-.534-2.584Zm14.547 0c0-.911.178-1.773.533-2.584a7.032 7.032 0 0 1 1.436-2.133 6.76 6.76 0 0 1 2.119-1.435 6.368 6.368 0 0 1 2.584-.534c.802 0 1.408.1 1.818.301v-2.68c0-.355.06-.683.178-.984a2.51 2.51 0 0 1 .492-.806c.219-.228.474-.406.766-.534a2.46 2.46 0 0 1 .971-.191c.337 0 .656.064.957.191.301.128.56.306.779.534.219.227.392.496.52.806.127.301.191.63.191.985v9.064c0 .912-.178 1.773-.533 2.584a6.728 6.728 0 0 1-1.422 2.106 6.863 6.863 0 0 1-2.119 1.435 6.544 6.544 0 0 1-2.598.52 6.512 6.512 0 0 1-2.584-.52 7.082 7.082 0 0 1-2.119-1.435 6.906 6.906 0 0 1-1.436-2.106 6.375 6.375 0 0 1-.533-2.584Zm4.867 0c0 .255.051.492.151.711.1.21.232.396.396.56.173.155.365.278.575.37.218.09.446.136.683.136.246 0 .479-.045.697-.136.219-.091.411-.214.575-.37.164-.164.296-.35.396-.56.1-.219.15-.456.15-.711 0-.255-.05-.488-.15-.697a1.532 1.532 0 0 0-.396-.56 1.792 1.792 0 0 0-1.272-.52c-.237 0-.465.045-.683.136a1.763 1.763 0 0 0-.575.383 1.779 1.779 0 0 0-.396.56c-.1.21-.151.443-.151.698Zm11.526 4.102c0-.328.064-.638.191-.93.128-.292.301-.547.52-.766a2.37 2.37 0 0 1 .765-.533c.292-.127.602-.191.93-.191.328 0 .638.064.93.191.301.128.56.305.779.533.228.219.406.474.533.766.137.292.205.601.205.93 0 .328-.068.638-.205.93a2.352 2.352 0 0 1-.533.765 2.43 2.43 0 0 1-.779.52 2.297 2.297 0 0 1-.93.19c-.328 0-.638-.063-.93-.19a2.481 2.481 0 0 1-1.285-1.286 2.304 2.304 0 0 1-.191-.93Zm-.096-13.057c0-.337.064-.656.192-.957.127-.3.3-.56.519-.78.219-.227.474-.405.766-.533.3-.127.619-.191.957-.191a2.328 2.328 0 0 1 1.709.725c.218.218.392.478.519.779.128.3.192.62.192.957v7.848c0 .346-.064.67-.192.97a2.474 2.474 0 0 1-.519.766 2.455 2.455 0 0 1-1.75.711 2.33 2.33 0 0 1-.944-.192 2.47 2.47 0 0 1-.765-.52 2.584 2.584 0 0 1-.506-.765 2.614 2.614 0 0 1-.178-.97v-7.848Z"
    />
    <circle cx={3} cy={66} r={3} fill="#FCD959" />
    <path
      fill="#FCD959"
      d="m18.323 32.528-.961 8.31a1.105 1.105 0 0 1-1.754.762l-1.698-1.255c-.978-.722-2.235.434-1.596 1.468l1.362 2.208a1.105 1.105 0 0 1-.827 1.679l-8.423.862c-1.291.132-1.336 1.997-.053 2.191l8.153 1.233c.783.119 1.19.999.774 1.673l-1.599 2.59c-.63 1.022.591 2.174 1.574 1.485l2.35-1.647a1.105 1.105 0 0 1 1.73.778l.968 8.364c.151 1.31 2.058 1.3 2.195-.011l.878-8.354a1.105 1.105 0 0 1 1.722-.796l2.644 1.807c.985.673 2.19-.477 1.563-1.492l-1.681-2.724a1.105 1.105 0 0 1 .774-1.673l8.233-1.245c1.282-.194 1.24-2.056-.05-2.19l-8.087-.848a1.105 1.105 0 0 1-.825-1.678l1.636-2.651c.627-1.015-.578-2.165-1.563-1.492l-2.644 1.807a1.105 1.105 0 0 1-1.722-.797l-.878-8.353c-.137-1.312-2.044-1.322-2.195-.011Z"
    />
    <path
      fill="#fff"
      d="M64.298 95.039c-13.879-2.948-32.48-16.254-42.088-24.224-1.036-.86-2.622-.48-3.153.756C1.242 113.022 4.114 131.82 7.872 136.07c4.787 6.131 25.2 19.542 38.884 28.018 1.719 1.065 4.697-1.183 4.608-3.203-.687-15.543 8.48-45.957 14.56-63.07.43-1.211-.368-2.508-1.626-2.775Z"
    />
    <path
      stroke="#EEE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M19.272 96.31c6.154-2.505 17.383-4.957 13.07 5.269 3.739-1.816 10.779-3.298 9.021 5.3 2.92-1.355 9.617-3.008 13.04 1.222M15.055 114.12c5.718-3.254 16.502-6.801 13.891 5.04 4.509-2.14 12.877-4.214 10.28 4.613 1.958-1.222 6.548-3.08 9.243-.735"
    />
    <path fill="#CACACA" d="M15.028 131.028 12 128l-2 10.5 4.97-4.588a2 2 0 0 0 .058-2.884Z" />
    <path
      fill="#EEE"
      d="M12.872 126.154c-2.38-2.817-5.405-9.187-6.872-12.654-4 14.8 1.167 23.167 4 25l3.69-9.021c.439-1.071-.071-2.441-.818-3.325Z"
    />
    <path
      fill="#FDE582"
      fillRule="evenodd"
      d="M233.87 102.399c0 4.384-1.003 8.533-2.791 12.231-1.483 3.066.511 7.813 3.736 8.906 11.102 3.765 19.092 14.273 19.092 26.647 0 12.374-7.989 22.882-19.091 26.647-3.225 1.094-5.218 5.841-3.736 8.907a28.011 28.011 0 0 1 2.792 12.231c0 15.537-12.595 28.131-28.132 28.131a28.017 28.017 0 0 1-12.533-2.939c-3.005-1.498-7.622.367-8.75 3.53-3.884 10.885-14.284 18.676-26.503 18.676s-22.619-7.791-26.503-18.676c-1.128-3.163-5.746-5.028-8.752-3.53a28.014 28.014 0 0 1-12.533 2.939c-15.536 0-28.131-12.594-28.131-28.131 0-4.383 1.003-8.533 2.791-12.231 1.483-3.066-.51-7.813-3.736-8.907C69.99 173.065 62 162.557 62 150.183c0-12.374 7.99-22.882 19.091-26.647 3.225-1.093 5.22-5.84 3.737-8.906a28.017 28.017 0 0 1-2.791-12.231c0-15.536 12.594-28.13 28.131-28.13 4.503 0 8.759 1.057 12.533 2.938 3.005 1.499 7.623-.367 8.752-3.53C135.336 62.79 145.736 55 157.956 55c12.219 0 22.619 7.791 26.503 18.677 1.128 3.162 5.743 5.027 8.748 3.53a28.018 28.018 0 0 1 12.532-2.939c15.536 0 28.131 12.595 28.131 28.131Z"
      clipRule="evenodd"
    />
    <path stroke="#1F1F1F" strokeWidth={3.477} d="m139.475 153.885 11.734 8.692 11.735-8.692" />
    <circle cx={167.222} cy={149.399} r={4.624} fill="#fff" />
    <circle cx={135.624} cy={149.399} r={4.624} fill="#fff" />
    <circle cx={139.573} cy={142.584} r={4.346} fill="#1F1F1F" />
    <circle cx={162.821} cy={142.584} r={4.346} fill="#1F1F1F" />
    <path
      stroke="#4B4B4B"
      strokeLinecap="round"
      strokeWidth={3.854}
      d="M179.298 229.086c3.674 8.57 5.382 18.437 9.405 26.4 1.948 3.855 4.432 5.874 10.243 2.598"
    />
    <path
      fill="#4B4B4B"
      d="M203.992 257.14c-.764-4.286-9.331-3.146-14.422-1.565-.776.242-1.416.81-1.658 1.585-1.031 3.308-.156 6.994 3.041 7.564 3.584.64 13.672-4.036 13.039-7.584Z"
    />
    <path
      stroke="#4B4B4B"
      strokeLinecap="round"
      strokeWidth={3.854}
      d="M137.347 227.955c1.285 10.148 3.083 31.291 0 34.682-3.082 3.391-7.964 2.955-10.019 1.542"
    />
    <path
      fill="#4B4B4B"
      d="M124.925 263.874c-.987-4.24 7.336-6.569 12.638-7.121.808-.084 1.621.186 2.149.803 2.251 2.634 2.899 6.366.186 8.15-3.042 2-14.156 1.678-14.973-1.832Z"
    />
    <path
      stroke="#4B4B4B"
      strokeLinecap="round"
      strokeWidth={3}
      d="M233.721 168.403c4.319 4.491 9.014 8.505 11.296 14.394.967 2.492 1.052 3.52.983 6.203-.055 2.127-1.908 6.056-3.5 7.5-3.105 2.816-5.304 3.868-8.278 6.898-.636.649-1.259 1.749-.236 2.375 1.219.744 2.27 1.883 3.437 2.728.405.294.545.271.545.781M78.323 163.506C70.34 159.515 62.659 154.648 57 147.5c-3.207-4.051-4.733-7.971-6.81-12.127"
    />
    <path
      fill="#B5922C"
      fillRule="evenodd"
      d="M151 143.5c0 12.979-10.521 23.5-23.5 23.5S104 156.479 104 143.5s10.521-23.5 23.5-23.5 23.5 10.521 23.5 23.5Zm3 10.509C149.817 164.548 139.529 172 127.5 172c-15.74 0-28.5-12.76-28.5-28.5s12.76-28.5 28.5-28.5c12.029 0 22.317 7.452 26.5 17.991C158.183 122.452 168.471 115 180.5 115c15.74 0 28.5 12.76 28.5 28.5S196.24 172 180.5 172c-12.029 0-22.317-7.452-26.5-17.991Zm50-10.509c0 12.979-10.521 23.5-23.5 23.5S157 156.479 157 143.5s10.521-23.5 23.5-23.5 23.5 10.521 23.5 23.5Z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="#FF7664"
      fillRule="evenodd"
      d="M148 141.5c0 12.979-10.521 23.5-23.5 23.5S101 154.479 101 141.5s10.521-23.5 23.5-23.5 23.5 10.521 23.5 23.5Zm3 10.509C146.817 162.548 136.529 170 124.5 170c-15.74 0-28.5-12.76-28.5-28.5s12.76-28.5 28.5-28.5c12.029 0 22.317 7.452 26.5 17.991C155.183 120.452 165.471 113 177.5 113c15.74 0 28.5 12.76 28.5 28.5S193.24 170 177.5 170c-12.029 0-22.317-7.452-26.5-17.991Zm50-10.509c0 12.979-10.521 23.5-23.5 23.5S154 154.479 154 141.5s10.521-23.5 23.5-23.5 23.5 10.521 23.5 23.5Z"
      clipRule="evenodd"
    />
  </svg>
);
