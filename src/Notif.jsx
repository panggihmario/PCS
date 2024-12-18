
import { ArrowLeft } from "lucide-react"
import notifications from "./dummy";
import { useNavigate } from 'react-router-dom';
import { CircleDollarSign, Pill, Clock4, Check, X, ArrowRight } from "lucide-react"
const Notification = () => {
  const navigate = useNavigate();
  return (<div className="max-w-[500px] ml-auto mr-auto">
    <div className="flex gap-2 items-center shadow-card p-4">
      <div onClick={() => navigate(-1)} ><ArrowLeft size={20} /></div>
      <div className="text-lg bg-gradient-to-r font-bold from-[#e63631]  to-[#ca335b] text-transparent bg-clip-text">Notification</div>

    </div>
    {
      notifications.map(notif => {
        return (
          <div className="px-4 py-2 grid grid-cols-[max-content_1fr] gap-2">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#e63631] relative">
              {notif.label === 'Reimbursement' && <CircleDollarSign color="white" />}
              {notif.label === 'Sickness' && <Pill color="white" />}
              {notif.label === 'Overtime' && <Clock4 color="white" />}
              {
                (notif.status === 'paid' || notif.status === 'approved') && (
                  <div className="absolute -bottom-1 -right-1 rounded-full bg-green-500 w-4 h-4 flex justify-center items-center">
                    <Check color="white" size={12} />
                  </div>
                )
              }
              {
                notif.status === 'rejected' && (
                  <div className="absolute -bottom-1 -right-1 rounded-full bg-red-500 w-4 h-4 flex justify-center items-center">
                    <X color="white" size={12} />
                  </div>
                )
              }

              {
                (notif.status === 'processed' || notif.status === 'reviewed') && (
                  <div className="absolute -bottom-1 -right-1 rounded-full bg-blue-500 w-4 h-4 flex justify-center items-center">
                    <ArrowRight color="white" size={12} />
                  </div>
                )
              }

            </div>
            <div className="w-full">
              <div className="flex justify-between items-center w-full">
                <div className="text-sm font-bold">{notif.label}</div>
                <div className="text-xs text-gray-500 font-medium">{notif.createdAt}</div>
              </div>
              {
                notif.status === 'paid' && (
                  <div className="text-xs text-gray-500">
                    Your submission with a total cost of 50.000 has been <span className="font-bold text-black">{notif.status}</span>  please check your Brimo, thank you
                  </div>
                )
              }
              {
                notif.status === 'rejected' && (
                  <div className="text-xs text-gray-500">
                    Your submission has been <span className="font-bold text-black">{notif.status}</span>. Please confirm with your superior
                  </div>
                )
              }
              {
                notif.status === 'approved' && (
                  <div className="text-xs text-gray-500">
                    Your submission has been <span className="font-bold text-black">{notif.status}</span> by the Superior.
                  </div>
                )
              }
              {
                notif.status === 'processed' && (
                  <div className="text-xs text-gray-500">
                    Your submission will be <span className="font-bold text-black">{notif.status}</span> according to reimbursement schedule. Please wait
                  </div>
                )
              }
              {
                notif.status === 'reviewed' && (
                  <div className="text-xs text-gray-500">
                    Your submission is being <span className="font-bold text-black">{notif.status}</span> to the Superior for the approval procces. Please wait
                  </div>
                )
              }
            </div>

          </div>
        )
      })
    }
  </div>);
}

export default Notification;