import TestFrame from "./TestFrame";
import ImageTestKhop from '../../../assets/test-khop.png';

export default function TestStep3() {

    return (
        <TestFrame
            title="KIỂM TRA KHỚP"
            img={ImageTestKhop}
            textImg={'Đứng rộng chân, lưng thẳng đứng,\ntay đưa ra sau và đan vào nhau'}
            textYes="Được"
            textNo="Không được"
            nextStep="TestStep4"
        />
    )
}