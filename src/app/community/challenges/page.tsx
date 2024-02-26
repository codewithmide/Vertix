"use client";

import DashboardLayout from "@/app/components/DashboardLayout";
import classnames from "@/shared/classnames";
import { challenges } from "@/shared/mock/challenges";
import { Button } from "@/app/components/Button";
import { IoMdAdd } from "react-icons/io";
import Modal from "@/app/components/Modal";
import { Input } from "@/app/components/FormComponent";
import { useState } from "react";
import toast from "react-hot-toast";

const Task = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (label: any, data: any) => {
    setFormData({
      ...formData,
      [label]: data,
    });
  
    console.log("Form Data", formData);
  };
  

  const createNew = () => {
    setFormData({
      title: "",
      description: "",
      duration: "",
    });
    toggleModal();
    toast.success("Successfully created a challenge.")
  };

  return (
    <DashboardLayout path="Challenges">
      <main className="flex-col flex gap-6 p-2 overflow-x-hidden">
        <div className="">
          <Button
            link={toggleModal}
           classname="text-white center gap-2 bg-green">
            <IoMdAdd />
            <p>Create a challenge</p>
          </Button>
        </div>
        <div className="w-full flex flex-wrap between gap-4">
          {challenges.map((challenge: any, index: number) => (
            <div
              key={index}
              className={classnames(
                "flex justify-between flex-col min-h-[13rem] p-4 w-[32%] rounded-md text-textColor",
                classnames
              )}
              style={{
                background: challenge.color,
                color: challenge.color === "#171714" ? "#ffffff" : "",
              }}
            >
              <div className="flex flex-col justify-between h-full">
                <small className="font-semibold text-md">
                  {challenge.title}
                </small>
                <p className="text-sm mt-3 text-[#121212]">{challenge.desc}</p>
              </div>
              <p className="text-md">Duration: {challenge.duration}</p>
            </div>
          ))}
        </div>

        <Modal show={showModal} handleModal={toggleModal}>
          <div className="w-full max-w-lg min-h-[50] bg-white p-8 z-10">
            <p className="font-[500] text-base mb-4">New challenge</p>

            <Input
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              label={`Challenge title`}
              placeholder={`Enter challenge title`}
              classname="mb-4"
            />

            <Input
              onChange={(e) => handleChange("description", e.target.value)}
              value={formData.description}
              label="Description"
              type="textbox"
              classname="mb-4"
              placeholder="Write the description description here"
            />

            <Input
              value={formData.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
              label={`Challenge duration`}
              placeholder={`Enter challenge duration`}
              classname="mb-4"
            />

            <Button
              classname="text-white bg-action w-full mt-8"
              link={createNew}
              validation={
                !formData.title || !formData.description || !formData.duration
              }
            >
              Publish challenge
            </Button>
          </div>
        </Modal>
      </main>
    </DashboardLayout>
  );
};

export default Task;
