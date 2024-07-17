function selectionSort(arr) {
    let n = arr.length;

    // پیمایش برای تعیین هر بار ابتدایی برای عنصر مرتب‌نشده
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // پیدا کردن کمترین عنصر در آرایه بدون مرتب‌سازی
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // جابجایی عنصر کمترین پیدا شده با اولین عنصر آرایه بدون مرتب‌سازی
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

// مثال استفاده:
let arr = [64, 25, 12, 22, 11];
console.log("آرایه اصلی: ", arr);
console.log("آرایه مرتب‌شده: ", selectionSort(arr));
