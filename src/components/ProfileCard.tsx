import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import type { Profile } from "@/data/profiles";

interface ProfileCardProps {
  profile: Profile;
}

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <Link
      to={`/profile/${profile.id}`}
      className="group block card-hover"
    >
      <div className="relative overflow-hidden rounded-2xl bg-card aspect-[3/4]">
        {/* Image */}
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="image-overlay" />

        {/* Online Indicator */}
        {profile.isOnline && (
          <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm">
            <span className="online-indicator" />
            <span className="text-xs font-medium text-online">Онлайн</span>
          </div>
        )}

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-xl font-semibold">
                {profile.name}, <span className="font-normal">{profile.age}</span>
              </h3>
              <div className="flex items-center gap-1 text-muted-foreground mt-1">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{profile.city}</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {profile.interests.slice(0, 2).map((interest) => (
              <span
                key={interest}
                className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary-foreground"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
