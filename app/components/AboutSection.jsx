"use client";
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from "./TabButton";
import TabData from "./TabData";


const AboutSection = () => {

    const TAB_DATA = TabData;
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section>
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/About-Me.png" width={500} height={500} />
                <div>
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">Lorem ipsum dolor, sit
                        amet consectetur adipisicing elit. Consectetur sapiente possimus, eos cupiditate, inventore ipsam eligendi a ducimus at nobis assumenda omnis ad ea suscipit nostrum sed, ut provident repellendus!
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}
                        >
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;