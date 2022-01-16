## 3D Model Viewer For IPFS Gateways

### How to Use

1. `git clone {THIS_REPOSITORY}`
2. `cd 3d-viewer`
3. `npm install`
4. `npm run build`
6. Upload a 3D Model file (in one of these formats: obj, 3ds, stl, ply, gltf, glb, 3dm, off) to Pinata or manually add it to IPFS yourself.
7. View the model in browser by visiting `${PUBLIC_URL}?object=${3D_MODEL_CID}&filename=${MODEL_FILENAME_WITH_EXTENSION}`

*Note: it is important that the `filename` parameter is included with the correct extension or the viewer will not work.*