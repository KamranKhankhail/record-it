export const getChildrenOfFolder = (state, folderId) => {

	const foldersWithinFolder = Object.keys(state.units.folders)
		.map((folderId) => state.units.folders[folderId])
		.filter((folder) => folder.parentId === folderId)
	const filesWithinFolder = Object.keys(state.units.files)
		.map((fileId) => state.units.files[fileId])
		.filter((file) => file.parentId === folderId)

	// const allChildrenOfFolder = { ...foldersWithinFolder, ...filesWithinFolder }
	Array.prototype.push.apply(foldersWithinFolder, filesWithinFolder);
	return foldersWithinFolder;
}

export const displayBreadCrumb = (state) => {
	let currentFolderId = state.currentFolder
	let currentParent = state.units.folders[currentFolderId].parentId
	const path = [];

	do {
		path.push(state.units.folders[currentFolderId].title)
		currentFolderId = currentParent;
		if (currentParent != null) currentParent = state.units.folders[currentParent].parentId
	} while (currentParent != null)
	path.push("Home")

	let breadcrumbString = ''
	for (let i = path.length - 1; i >= 0; i--) {
		breadcrumbString += path[i]
		if (i > 0) breadcrumbString += ' > '
	}
	return breadcrumbString;
}
