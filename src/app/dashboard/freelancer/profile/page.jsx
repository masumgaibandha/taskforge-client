"use client";

import { updateUserProfile } from "@/lib/actions/users";
import { getUserProfile } from "@/lib/api/users";
import { useSession } from "@/lib/auth-client";
import { Envelope, Pencil } from "@gravity-ui/icons";
import { Avatar, Button, Card, Chip, Input, TextArea } from "@heroui/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiCheckCircle, FiGlobe, FiMapPin, FiPhone } from "react-icons/fi";
import { getClientTasks } from "@/lib/api/tasks";
import { getFreelancerProposals, getProposals } from "@/lib/api/proposals";

const FreelancerProfile = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      if (!user?.email) return;

      const data = await getUserProfile(user.email);
      const tasks = await getClientTasks(user.email);
      const proposals = await getFreelancerProposals(user.email);

      setProfile(data);

      setStats([
        {
          label: "Total Proposals",
          value: proposals.length,
        },
        {
          label: "Pending",
          value: proposals.filter((proposal) => proposal.status === "pending")
            .length,
        },
        {
          label: "Accepted",
          value: proposals.filter((proposal) => proposal.status === "accepted")
            .length,
        },
        {
          label: "Rejected",
          value: proposals.filter((proposal) => proposal.status === "rejected")
            .length,
        },
      ]);
    };

    loadProfile();
  }, [user?.email]);

  const handleSave = async (e) => {
    e.preventDefault();

    if (!user?.email) {
      toast.error("User email not found");
      return;
    }

    setIsLoading(true);

    const formData = new FormData(e.currentTarget);

    const profileData = {
      name: formData.get("name") || user?.name || "Client",
      image: formData.get("image") || displayImage,
      phone: formData.get("phone"),
      location: formData.get("location"),
      website: formData.get("website"),
      bio: formData.get("bio"),
    };

    const res = await updateUserProfile(user.email, profileData);

    if (res.modifiedCount > 0) {
      toast.success("Profile updated successfully");

      setProfile((prev) => ({
        ...prev,
        ...profileData,
        email: user.email,
        role: user.role,
      }));
    } else {
      toast.error("No changes were made");
    }

    setIsLoading(false);
  };

  const displayName = profile?.name || user?.name || "Client";
  const displayEmail = user?.email || profile?.email || "No email";
  const displayImage =
    profile?.image || user?.image || "/assets/default-avatar.png";

  return (
    <section className="min-h-screen bg-slate-950 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Freelancer Profile</h1>
          <p className="mt-2 text-slate-400">
            Manage your Freelancer account and Job profile.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl shadow-cyan-500/10">
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-28 w-28 border-3 border-cyan-500">
                  <Avatar.Image alt={displayName} src={displayImage} />
                  <Avatar.Fallback>{displayName?.[0] || "C"}</Avatar.Fallback>
                </Avatar>

                <h2 className="mt-5 text-xl font-semibold text-white">
                  {displayName}
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Freelancer Account
                </p>

                <Chip className="mt-4 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                  <FiCheckCircle className="mr-1" />
                  Verified Freelancer
                </Chip>
              </div>

              <div className="mt-8 space-y-4">
                <ProfileInfo icon={Envelope} text={displayEmail} />
                <ProfileInfo
                  icon={FiPhone}
                  text={profile?.phone || "Not provided"}
                />
                <ProfileInfo
                  icon={FiMapPin}
                  text={profile?.location || "Not provided"}
                />
                <ProfileInfo
                  icon={FiGlobe}
                  text={profile?.website || "Not provided"}
                />
              </div>
            </div>
          </Card>

          <Card className="rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl shadow-cyan-500/10 lg:col-span-2">
            <div className="p-6">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    Profile Information
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Update your Freelancer profile details.
                  </p>
                </div>

                <Button className="bg-cyan-500 font-medium text-slate-950">
                  <Pencil className="h-4 w-4" />
                  Edit Profile
                </Button>
              </div>

              <form
                key={profile?._id || user?.email}
                onSubmit={handleSave}
                className="grid gap-5"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Input
                    name="name"
                    label="Full Name"
                    defaultValue={displayName}
                  />

                  <Input
                    name="email"
                    label="Email Address"
                    defaultValue={displayEmail}
                    readOnly
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <Input
                    name="phone"
                    label="Phone Number"
                    defaultValue={profile?.phone || ""}
                    placeholder="Phone Number"
                  />

                  <Input
                    name="location"
                    label="Location"
                    defaultValue={profile?.location || ""}
                    placeholder="Your Location"
                  />
                </div>

                <Input
                  name="image"
                  label="Profile Image URL"
                  defaultValue={displayImage}
                />

                <Input
                  name="website"
                  label="Website"
                  defaultValue={profile?.website || ""}
                  placeholder="https://example.com"
                />

                <TextArea
                  name="bio"
                  label="About Freelancer"
                  defaultValue={profile?.bio || ""}
                  className="min-h-32 text-slate-600"
                />

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <Button
                    type="submit"
                    isDisabled={isLoading}
                    className="bg-cyan-500 font-semibold text-slate-950"
                  >
                    {isLoading ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const ProfileInfo = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center gap-3 text-slate-300">
      <Icon className="h-5 w-5 text-cyan-400" />
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default FreelancerProfile;
