import { useState, useEffect } from "react";

export default function useJsonFetch(url, ...opts) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [hasError, setError] = useState(null)

    useEffect(() => {
        (async function json () {
            try {
                const response = await fetch(url, {...opts});
                if (response.status >= 200 && response.status < 300) {
                    const data = await response.json();
                    setData(data)
                } else {
                  throw new Error(response.statusText)
                }
            } catch (e) {
                setError(e)
            } finally {
                setLoading(false)
            }
        })()
    }, [])
    return [data, isLoading, hasError] 
}