import { toast } from "react-toastify";

const getStoredApps = () => {
    const storedApss = localStorage.getItem('storedApss');
    if (storedApss) {
        return JSON.parse(storedApss)
    }
    else { return [] }
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


export { getStoredApps, addAppsToLs }
