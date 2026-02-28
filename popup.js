console.log("Popup script loaded");

document.getElementById("scanBtn").addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.tabs.sendMessage(tab.id, { action: "getImages" }, (response) => {
        const imageList = document.getElementById("imageList");
        imageList.innerHTML = "";

        response.images.forEach((url) => {
            const img = document.createElement("img");
            img.src = url;
            img.width = 100;

            const downloadBtn = document.createElement("button");
            downloadBtn.textContent = "Download";
            downloadBtn.onclick = () => {
                chrome.downloads.download({ url });
            };

            const container = document.createElement("div");
            container.appendChild(img);
            container.appendChild(downloadBtn);

            imageList.appendChild(container);
        });
    });
});