(() => {
    //mmediately Invoked Function Expression - IIFE
    //  جميع الكود الموجود داخل هذا القسم سيعمل بشكل فوري عند تحميل الصفحة، بسبب استخدام الأقواس.
    const generatePassword = (length, charSet) => {
        let password = " ";  // تبدأ الكلمة الفارغة بـ " " (مسافة).
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);  // توليد رقم عشوائي داخل نطاق مجموعة الأحرف.
            password += charSet[randomIndex];  // إضافة الحرف العشوائي إلى كلمة المرور.
        }
        return password;  // إرجاع كلمة المرور.
    };
    const generatePasswords = () => {
        const charSets = {
            weekly: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",  // مجموعة الحروف للأسبوعية
            medium: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",  // مجموعة الحروف للمتوسطة
            strong: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"  // مجموعة الحروف للقوية
        };
        
        const weeklyPasswords = [];
        const mediumPasswords = [];
        const strongPasswords = [];
    
        // توليد 5 كلمات مرور لكل فئة
        for (let i = 0; i < 5; i++) {
            weeklyPasswords.push(generatePassword(6, charSets.weekly));  // توليد كلمة سر ضعيفة بطول 6
            mediumPasswords.push(generatePassword(8, charSets.medium));  // توليد كلمة سر متوسطة بطول 8
            strongPasswords.push(generatePassword(12, charSets.strong));  // توليد كلمة سر قوية بطول 12
        }
    
        console.log("Weekly Passwords:", weeklyPasswords);  // طباعة كلمات السر الضعيفةة
        console.log("Medium Passwords:", mediumPasswords);  // طباعة كلمات السر المتوسطة
        console.log("Strong Passwords:", strongPasswords);  // طباعة كلمات السر القوية
    
        return { weeklyPasswords, mediumPasswords, strongPasswords };  // إرجاع جميع كلمات السر.

    };

const startPasswordGeneration = () => {
    let passwords = generatePasswords();  // توليد كلمات السر لأول مرة.
    
    // توليد كلمات مرور جديدة كل دقيقة.
    const intervalId = setInterval(() => {
        passwords = generatePasswords();  // إعادة توليد كلمات السر.
    }, 60000);  // التكرار كل 60000 ميلي ثانية (دقيقة واحدة).

    // مسح كلمات السر وإعادة البدء بعد 5 دقائق.
    setTimeout(() => {
        clearInterval(intervalId);  // إيقاف التكرار.
        console.log("All passwords cleared. Restarting process");  // طباعة رسالة توضح إعادة البدء.
        startPasswordGeneration();  // إعادة تشغيل التوليد.
    }, 300000);  // الانتظار لمدة 300000 ميلي ثانية (5 دقائق).
};
startPasswordGeneration();  // بدء عملية توليد كلمات السر عند تحميل الكود.

})();
