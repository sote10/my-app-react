// export const Button = () => {
//   return <button type="button">Este es un botón</button>;
// };

// interface ButtonProps {
//   variant?: "primary" | "outline" | "destructive";
// }

// export const Button = ({ variant = "primary" }: ButtonProps) => {
//   return <button type="button">Este es un botón</button>;
// };

// interface ButtonProps {
//   variant?: "primary" | "outline" | "destructive";
// }

// export const Button = ({ variant = "primary" }: ButtonProps) => {
//   let className =
//     "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";

//   // Estilo outline
//   if (variant === "outline") {
//     className =
//       "rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50";
//   } else if (variant === "destructive") {
//     className =
//       "rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
//   }

//   // Estilo primario (por defecto)
//   return (
//     <button type="button" className={className}>
//       Este es un botón
//     </button>
//   );
// };



// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: "primary" | "outline" | "destructive";
// }

// export const Button = ({ variant = "primary", children, }: ButtonProps, rounded:boolean = false) => {
//   let className =
//     "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";

//   // Estilo outline
//   if (variant === "outline") {
//     className =
//       "rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50";
//   } else if (variant === "destructive") {
//     className =
//       "rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
//   }

//   // Estilo primario (por defecto)
//   return (
//     <button type="button" className={className}>
//       {children}
//     </button>
//   );
// };


import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "destructive";
  rounded?: boolean; // opcional
}

export const Button = ({
  variant = "primary",
  rounded = false,
  children,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "px-3 py-2 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 transition";

  const roundedClass = rounded ? "rounded-full" : "rounded-md";

  let variantClasses =
    "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600";

  if (variant === "outline") {
    variantClasses =
      "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50";
  }

  if (variant === "destructive") {
    variantClasses =
      "bg-red-500 text-white hover:bg-red-600 focus-visible:outline-red-600";
  }

  return (
    <button
      type="button"
      className={`${baseClasses} ${roundedClass} ${variantClasses}`}
      {...props}
    >
      {children}
    </button>
  );
};
