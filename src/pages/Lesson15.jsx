console.log('Data loaded:', result.data);
return result;
    } finally {
    clearInterval(loadingInterval);
    console.log('Loading stopped');
}
}

// 18. Advanced: AbortController for Cancellation
function createCancell