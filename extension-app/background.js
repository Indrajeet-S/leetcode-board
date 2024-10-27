chrome.action.onClicked.addListener((tab) => {
  const urlPattern = /leetcode\.com\/problems\/([\w-]+)\//; // Regex to match LeetCode problem URLs
  const match = tab.url.match(urlPattern);
  
  if (match && match[1]) {
    const problemID = match[1];
    const redirectUrl = `http://localhost:3000/problems/${problemID}`;
  
    // Open the corresponding whiteboard page in a new tab
    chrome.tabs.create({ url: redirectUrl });
  } else {
    console.log("Not a valid LeetCode problem page.");
  }
});
