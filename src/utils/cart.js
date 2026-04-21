export function addOne(prev, productId) {
    const id = String(productId);

    return {
        ...prev,
        [id]: (prev[id] ?? 0) + 1
    }
}

export function removeOne(prev, productId) {
    const id = String(productId);
    const current = prev[id] ?? 0;
    const next = current - 1;

    if (next <= 0) {
        const copy = {...prev};
        delete copy[id];
        return copy;
    }
    return { ...prev, [id]: next};
}

export function removeLine(prev, productId) {
    const id = String(productId);
    const copy = { ...prev };
    delete copy[id];
    return copy;
}
