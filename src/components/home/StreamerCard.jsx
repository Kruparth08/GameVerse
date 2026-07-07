import { Users, BadgeCheck } from "lucide-react";

const StreamerCard = ({
  // banner,
  avatar,
  name,
  category,
  followers,
  live,

}) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30">
      {/* Banner */}
      {/* <div className="relative h-40"> */}
        {/* <img
          src={banner}
          alt={name}
          className="h-full w-full object-cover"
        /> */}

        {live && (
          <span className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold ">
            LIVE
          </span>
        )}
      {/* </div> */}

      {/* Avatar */}
      <div className="mt-1 px-6">
        <img
          src={avatar}
          alt={name}
          className="h-20 w-20 rounded-full border-4 border-[#0B1020] object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-6 pb-6">
        <div className="mt-4 flex items-center gap-2">
          <h3 className="text-xl font-bold">{name}</h3>

          <BadgeCheck
            className="text-cyan-400"
            size={18}
          />
        </div>

        <p className="mt-2 text-cyan-300">
          {category}
        </p>

        <div className="mt-4 flex items-center gap-2 text-gray-400">
          <Users size={18} />
          <span>{followers} Followers</span>
        </div>

        <button className="mt-6 w-full rounded-xl bg-cyan-400 py-3 font-semibold text-black transition hover:bg-cyan-300">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default StreamerCard;