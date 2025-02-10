import { User } from "lucide-react";
import Link from "next/link";

interface ChildProfileProps {
  id: string;
  childName: string;
  dateOfBirth: string;
  fatherName: string;
  motherName: string;
  avatar?: string;
  status?: string;
}

export function ChildProfileCard({
  id,
  childName,
  dateOfBirth,
  fatherName,
  motherName,
  avatar,
  status = "active",
}: ChildProfileProps) {
 

  return (
    <Link
      href={`/children-profile/${id}`}
      className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" />

      <div className="p-6 flex gap-6">
        <div className="flex-shrink-0">
          <div className="relative">
            {avatar ? (
              <img
                src={avatar || "/placeholder.svg"}
                alt={childName}
                className="w-24 h-24 rounded-xl object-cover border-2 border-purple-100"
              />
            ) : (
              <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center border-2 border-purple-100">
                <User className="w-12 h-12 text-purple-400" />
              </div>
            )}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs text-white shadow-sm">
              ID: {id}
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="text-sm text-gray-500">Họ và tên trẻ:</label>
            <div className="font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {childName || "---"}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-3">
              <label className="text-sm text-blue-600">Ngày sinh:</label>
              <div className="font-medium text-gray-900">
                {dateOfBirth || "---"}
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-3">
              <label className="text-sm text-purple-600">Họ và tên bố:</label>
              <div className="font-medium text-gray-900">
                {fatherName || "---"}
              </div>
            </div>

            <div className="bg-pink-50 rounded-lg p-3">
              <label className="text-sm text-pink-600">Họ và tên mẹ:</label>
              <div className="font-medium text-gray-900">
                {motherName || "---"}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-4">
          <div
            className={`
            px-3 py-1 rounded-full text-xs font-medium
            ${
              status === "active"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }
          `}
          >
            {/* {status === "active" ? "Đang học" : "Nghỉ học"} */}
          </div>
        </div>
      </div>
    </Link>
  );
}
