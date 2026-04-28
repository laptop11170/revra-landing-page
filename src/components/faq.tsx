"use client";

import { FAQS } from '@/constants';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    return (
        <Wrapper className="py-24 lg:py-32" id="faq">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="FAQ" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold">
                        Frequently asked questions
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to know about RevRa before getting started
                    </p>
                </AnimationContainer>
            </div>

            <div className="max-w-3xl mx-auto pt-10">
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {FAQS.map((item, index) => (
                        <AnimationContainer
                            key={index}
                            animation="fadeUp"
                            delay={0.5 + (index * 0.1)}
                        >
                            <AccordionItem
                                value={`item-${index}`}
                                className="border-none bg-surface-container-lowest/60 backdrop-blur-xl rounded-xl px-6"
                            >
                                <AccordionTrigger className="hover:no-underline py-6 text-base font-display text-left">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-left pb-6 font-body">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </AnimationContainer>
                    ))}
                </Accordion>
            </div>
        </Wrapper>
    );
};

export default FAQ;