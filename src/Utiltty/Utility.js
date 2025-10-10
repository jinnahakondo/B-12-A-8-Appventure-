import { toast } from "react-toastify";

const getStoredApps = () => {
    const storedApss = localStorage.getItem('storedApss');
    if (!storedApss) return [];
    try {
        const parsedStoredApps = JSON.parse(storedApss)
        if (Array.isArray(parsedStoredApps)) {
            return parsedStoredApps;
        }
        else {
            return [];
        }
    }
    catch {
        return []
    }
    // if (storedApss) {
    //     return JSON.parse(storedApss)
    // }
    // else { return [] }
}

const addAppsToLs = id => {
    const storedApss = getStoredApps();
    if (storedApss.includes(id)) {
        toast.error("the app is already installed")
    }
    else {
        storedApss.push(id)
        const data = JSON.stringify(storedApss);
        localStorage.setItem("storedApss", data)
    }

}

// remove app from localStorage 
const removeFromLs = ids => {
    localStorage.setItem("storedApss", JSON.stringify(ids))
}

export { getStoredApps, addAppsToLs, removeFromLs }
