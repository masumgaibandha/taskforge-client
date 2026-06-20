"use client";

import { Avatar, Button, Card, Chip, Input, TextArea } from "@heroui/react";
import { Envelope, Pencil } from "@gravity-ui/icons";
import { FiCheckCircle, FiGlobe, FiMapPin, FiPhone } from "react-icons/fi";
import toast from "react-hot-toast";

const ClientProfile = () => {
  const handleSave = (e) => {
    e.preventDefault();
    toast.success("Profile updated successfully");
  };

  const stats = [
    { label: "Total Tasks", value: "12" },
    { label: "Open Tasks", value: "4" },
    { label: "In Progress", value: "3" },
    { label: "Total Spent", value: "$1,250" },
  ];

  return (
    <section className="min-h-screen bg-slate-950 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Client Profile</h1>
          <p className="mt-2 text-slate-400">
            Manage your client account and hiring profile.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl shadow-cyan-500/10">
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-28 w-28 border-3 border-cyan-500">
                  <Avatar.Image
                    alt="Abdullah Al Masum"
                    src="https://i.ibb.co/S45GCys8/Final-removebg-preview-1.png"
                  />
                  <Avatar.Fallback>AM</Avatar.Fallback>
                </Avatar>

                <h2 className="mt-5 text-xl font-semibold text-white">
                  Abdullah Al Masum
                </h2>

                <p className="mt-1 text-sm text-slate-400">Client Account</p>

                <Chip className="mt-4 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                  <FiCheckCircle className="mr-1" />
                  Verified Client
                </Chip>
              </div>

              <div className="mt-8 space-y-4">
                <ProfileInfo icon={Envelope} text="client@example.com" />
                <ProfileInfo icon={FiPhone} text="+880 1234 567890" />
                <ProfileInfo icon={FiMapPin} text="Dhaka, Bangladesh" />
                <ProfileInfo icon={FiGlobe} text="taskforge.com" />
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
                    Update your client profile details.
                  </p>
                </div>

                <Button className="bg-cyan-500 font-medium text-slate-950">
                  <Pencil className="h-4 w-4" />
                  Edit Profile
                </Button>
              </div>

              <form onSubmit={handleSave} className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Input label="Full Name" defaultValue="Abdullah Al Masum" />
                  <Input
                    label="Email Address"
                    defaultValue="client@example.com"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <Input label="Phone Number" defaultValue="+880 1234 567890" />
                  <Input label="Location" defaultValue="Dhaka, Bangladesh" />
                </div>

                <Input
                  label="Profile Image URL"
                  defaultValue="https://i.ibb.co/S45GCys8/Final-removebg-preview-1.png"
                />

                <Input label="Website" defaultValue="https://taskforge.com" />

                <TextArea
                  label="About Client"
                  defaultValue="I post micro-tasks and hire skilled freelancers for fast, reliable project delivery."
                  className="min-h-32 text-slate-600"
                />

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-slate-700 text-slate-300"
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    className="bg-cyan-500 font-semibold text-slate-950"
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <Card
              key={item.label}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl shadow-cyan-500/10"
            >
              <div className="p-5">
                <p className="text-sm text-slate-400">{item.label}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {item.value}
                </h3>
              </div>
            </Card>
          ))}
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

export default ClientProfile;
