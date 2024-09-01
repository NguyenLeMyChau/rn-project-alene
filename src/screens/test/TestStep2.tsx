import TestFrame from "./TestFrame";
import ImageTestXuong from '../../../assets/test-xuong.png';

export default function TestStep2() {

    return (
        <TestFrame
            title="KIỂM TRA XƯƠNG"
            img={ImageTestXuong}
            textImg={'Duỗi 2 tay về phía trước, từ từ cúi xuống\n để chạm vào mũi bàn chân'}
            textYes="Được"
            textNo="Không được"
            nextStep="TestStep3"
        />
    )
}