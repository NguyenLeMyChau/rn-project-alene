import TestFrame from "../../../components/frame/TestFrame";
import ImageTestDeKhang from '../../../../assets/test-dekhang.png';

export default function TestStep4() {

    return (
        <TestFrame
            title="KIỂM TRA ĐỀ KHÁNG"
            img={ImageTestDeKhang}
            isVideo={false}
            textImg={'6 tháng gần đây, bạn có gặp các triệu\n chứng: ho, sổ mũi, cảm sốt?'}
            textYes="Hiếm khi"
            textNo="Nhiều lần"
            stopTimeout={true}
        />
    )
}