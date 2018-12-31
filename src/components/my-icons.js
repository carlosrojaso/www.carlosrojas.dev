/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from "@polymer/lit-element";

export const menuIcon = html`
  <svg height="24" viewBox="0 0 24 24" width="24">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
  </svg>
`;
export const addToCartIcon = html`
  <svg height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none" />
    <path
      id="cart-path"
      d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"
    />
  </svg>
`;
export const removeFromCartIcon = html`
  <svg height="24" viewBox="0 0 24 24" width="24">
    <path
      d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
`;
export const minusIcon = html`
  <svg height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
    />
  </svg>
`;
export const plusIcon = html`
  <svg height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
    />
  </svg>
`;
export const wamIcon = html`
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="1425.000000pt"
    height="1425.000000pt"
    viewBox="0 0 1425.000000 1425.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,1425.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M6800 14239 c-328 -15 -688 -57 -1015 -120 -320 -61 -794 -189 -1040
-281 -425 -158 -703 -284 -1080 -487 -200 -108 -588 -362 -800 -523 -75 -56
-146 -110 -158 -118 -13 -8 -36 -27 -52 -41 -17 -15 -95 -82 -175 -150 -186
-158 -591 -563 -749 -749 -68 -80 -135 -158 -150 -175 -14 -16 -33 -39 -41
-52 -8 -12 -62 -83 -118 -158 -161 -212 -418 -605 -522 -800 -92 -171 -191
-366 -245 -484 -810 -1763 -866 -3778 -157 -5576 613 -1557 1752 -2846 3227
-3653 869 -475 1800 -751 2845 -844 224 -20 949 -17 1170 5 973 96 1792 332
2618 755 976 498 1825 1219 2489 2112 754 1015 1228 2233 1357 3490 54 522 46
1141 -20 1645 -251 1917 -1250 3627 -2801 4792 -501 377 -1031 674 -1628 913
-937 375 -1945 546 -2955 499z m1220 -4743 c65 -28 105 -66 205 -198 122 -161
165 -193 259 -193 84 0 138 33 277 169 181 176 244 192 400 100 82 -48 86 -49
164 -48 75 0 89 4 214 58 153 66 210 75 258 40 53 -39 65 -75 73 -208 9 -153
28 -197 97 -228 97 -43 203 -4 344 126 98 91 155 130 210 146 l32 9 -7 -112
c-7 -127 7 -358 30 -492 8 -49 17 -91 18 -92 1 -2 47 -12 101 -23 54 -11 100
-22 103 -24 8 -8 -71 -224 -127 -346 -31 -69 -98 -195 -148 -280 -171 -292
-212 -397 -220 -570 -10 -202 65 -453 216 -719 22 -40 41 -74 41 -76 0 -1 27
-51 61 -111 130 -233 185 -372 195 -496 14 -164 -63 -315 -191 -374 -57 -27
-104 -30 -217 -12 -99 15 -142 3 -191 -51 -34 -37 -67 -119 -67 -164 0 -15 -5
-18 -24 -13 -13 3 -79 11 -147 17 -273 24 -650 -28 -871 -120 -229 -96 -390
-275 -391 -435 l-1 -65 -42 39 c-83 77 -177 109 -432 151 -221 35 -284 51
-368 89 -121 55 -193 144 -277 342 -119 278 -176 348 -318 394 -41 13 -106 18
-269 23 -209 6 -216 7 -272 34 -102 50 -180 166 -229 342 -32 113 -32 313 0
433 31 118 56 169 172 353 124 198 164 281 185 378 23 114 9 163 -101 342
-143 232 -164 330 -88 420 62 74 138 77 335 13 168 -54 244 -61 319 -27 90 40
157 130 194 258 23 79 15 245 -20 420 -36 181 -42 299 -21 405 41 203 153 339
316 385 64 18 168 14 220 -9z m-3010 -2783 c208 -53 368 -212 446 -443 14 -40
19 -84 19 -165 0 -101 -3 -119 -38 -222 l-38 -111 -77 -21 c-349 -94 -655 -51
-882 124 -89 69 -87 64 -100 221 -25 289 -4 400 90 488 139 130 374 183 580
129z m3923 -2254 c91 -47 192 -67 404 -84 276 -22 403 -55 492 -130 32 -28 33
-31 28 -84 -8 -89 -42 -165 -104 -231 -192 -207 -476 -200 -694 19 -115 115
-161 209 -213 436 -14 61 -29 121 -32 135 l-8 25 34 -28 c18 -16 60 -42 93
-58z"
      />
    </g>
  </svg>
`;
