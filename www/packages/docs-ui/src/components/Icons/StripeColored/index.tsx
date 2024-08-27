import { IconProps } from "@medusajs/icons/dist/types"
import React from "react"

export const StripeColoredIcon = (props: IconProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.5"
        width="24"
        height="24"
        rx="4"
        fill="url(#pattern0_10420_39617)"
      />
      <rect
        x="0.5"
        width="24"
        height="24"
        rx="4"
        fill="url(#pattern1_10420_39617)"
      />
      <defs>
        <pattern
          id="pattern0_10420_39617"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_10420_39617" transform="scale(0.001)" />
        </pattern>
        <pattern
          id="pattern1_10420_39617"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image1_10420_39617" transform="scale(0.00416667)" />
        </pattern>
        <image
          id="image0_10420_39617"
          width="1000"
          height="1000"
        />
        <image
          id="image1_10420_39617"
          width="240"
          height="240"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}