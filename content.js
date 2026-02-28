chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getImages") {

        const images = Array.from(document.images).map(img => img.src);
        const uniqueImages = [...new Set(images)];

        sendResponse({ images: uniqueImages });
    }
});