import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

// Danh sách các bước và kết quả
const data = [
    { steps: [true, true, true, true], result: "good" },
    { steps: [true, true, true, false], result: "normal" },
    { steps: [true, true, false, false], result: "normal" },
    { steps: [true, false, false, false], result: "bad" },
    { steps: [false, false, false, false], result: "bad" },
    { steps: [false, true, true, true], result: "normal" },
    { steps: [false, false, true, true], result: "normal" },
    { steps: [false, true, false, false], result: "bad" },
    { steps: [true, false, true, true], result: "normal" },
    { steps: [true, true, false, true], result: "normal" },
    { steps: [true, false, false, true], result: "bad" },
    { steps: [true, true, true, false], result: "normal" },
    { steps: [true, false, true, false], result: "normal" },
    { steps: [false, true, true, false], result: "normal" },
    { steps: [false, true, false, true], result: "normal" },
    { steps: [false, false, true, false], result: "normal" },
    { steps: [false, false, false, true], result: "bad" }
];

// Thêm dữ liệu vào Firestore
const addData = async () => {
    try {
        const collectionRef = collection(db, 'assessment-table'); // Thay đổi tên collection theo ý bạn

        for (const item of data) {
            await addDoc(collectionRef, item);
        }

        console.log('Dữ liệu đã được thêm thành công!');
    } catch (error) {
        console.error('Lỗi khi thêm dữ liệu vào Firestore:', error);
    }
};

addData();
