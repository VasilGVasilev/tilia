I have made my custom cropper to utilize the coordinates that I have gathered for showing the availiablity status of the apartments. I tried PS, GIMP and several JS libraries like Sharp, but prefered Python in the end.

I made a virtual env becuase, unlike node.js ecosystem, Python saves packages globally. I produced the following code in my cropper.py file:

```sh
import numpy as np
import cv2

img = cv2.imread("uncropped.jpg")
pixel_coordinates = [
    [4789.2877, 3845.120],
    [2872.1833, 3845.120],
    [2872.1833, 3934.784],
    [2590.7892, 3934.784],
    [2590.7892, 4078.368],
    [2042.8688, 4233.576],
    [894.6901, 4233.576],
    [894.6901, 3920.5],
    [687.7709, 3920.5],
    [853.7097, 1204.968],
    [1406.5033, 1204.968],
    [1406.5033, 2343.936],
    [2200.7144, 2343.936],
    [2200.7144, 2589.376],
    [2545.8249, 2589.376],
    [2545.8249, 2539.584],
    [2590.7892, 2539.584],
    [2590.7892, 2343.936],
    [4799.6569, 2343.936],
    [4789.8388, 3845.120]
]

# refactor into whole numbers
integer_pixel_coordinates = [[int(x[0]), int(x[1])] for x in pixel_coordinates]

# Convert to NumPy array
pts = np.array(integer_pixel_coordinates)

## (1) Crop the bounding rect
rect = cv2.boundingRect(pts)
x,y,w,h = rect
croped = img[y:y+h, x:x+w].copy()

## (2) make mask
pts = pts - pts.min(axis=0)

mask = np.zeros(croped.shape[:2], np.uint8)
cv2.drawContours(mask, [pts], -1, (255, 255, 255), -1, cv2.LINE_AA)

## (3) do bit-op
dst = cv2.bitwise_and(croped, croped, mask=mask)

## (4) add the white background
bg = np.ones_like(croped, np.uint8)*255
cv2.bitwise_not(bg,bg, mask=mask)
dst2 = bg+ dst


cv2.imwrite("dst2.png", dst2)
cv2.imwrite("croped.png", croped)
```