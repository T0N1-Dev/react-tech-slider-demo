"use client"

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "react-tech-slider";
import { brandLists, categoryLabels } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal } from "lucide-react";
import Head from 'next/head';
import { useSliderStyles } from "@/hooks/useSliderStyles";
import { useEmblaCarouselData } from "@/hooks/useEmblaCarouselData";
import { useLoaded } from "@/hooks/useLoaded";
import { usePercentage } from "@/hooks/usePercentage";
import { RangeBar } from "@/components/RangeBar";

export default function SliderPropsEditor() {
  const [iconWidth, setIconWidth] = useState(5);
  const [autoPlay, setAutoPlay] = useState(true);
  const [pauseOnHover, setPauseOnHover] = useState(false);
  const [speed, setSpeed] = useState(30000);
  const { emblaRef, scrollTo, selectedIndex } = useEmblaCarouselData();
  const { borderColor, backgroundColor, borderWidth, setBackgroundColor, setBorderColor, setBorderWidth } = useSliderStyles(selectedIndex);
  const { loaded } = useLoaded();

  // Calculate percentage for speed slider (5000-40000 range)
  const minSpeedRange = 5000;
  const maxSpeedRange = 40000;
  const minIconWidth = 1;
  const maxIconWidth = 15;
  const { percentage: speedPercentage } = usePercentage(speed, minSpeedRange, maxSpeedRange);
  const { percentage: iconPercentage } = usePercentage(iconWidth, minIconWidth, maxIconWidth);

  
  return (
    <div className="container mx-auto py-10 px-4">
      <Head>
        <link rel="icon" href="../public/favicon.ico"/>
      </Head>

      <h1 className="text-3xl font-bold mb-8 text-center">Slider Props Editor</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Customize Props</h2>

            <div className="space-y-6">
              
              <RangeBar 
                value={borderWidth} 
                setState={setBorderWidth} 
                htmlFor="borderWidth" 
                htmlForText="Border Width" 
                id="borderWidth"
                minRange={0}
                maxRange={10}
                styleBackgroundStyleInitValue={borderWidth * 10}
                styleBackgroundStyleEndValue={borderWidth * 10}
              />

              <div className="space-y-2">
                <Label htmlFor="borderColor">Border Color</Label>
                <div className="flex gap-3">
                  <Input
                    id="borderColor"
                    type="color"
                    value={borderColor}
                    onChange={(e) => setBorderColor(e.target.value)}
                    className="w-12 h-10 p-1"
                  />
                  <Input
                    type="text"
                    value={borderColor}
                    onChange={(e) => setBorderColor(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="backgroundColor">Background Color</Label>
                <div className="flex gap-3">
                  <Input
                    id="backgroundColor"
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="w-12 h-10 p-1"
                  />
                  <Input
                    type="text"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              <RangeBar 
                value={iconWidth} 
                setState={setIconWidth} 
                htmlFor="iconWidth" 
                htmlForText="Icon Width" 
                id="iconWidth"
                minRange={minIconWidth}
                maxRange={maxIconWidth}
                styleBackgroundStyleInitValue={iconPercentage}
                styleBackgroundStyleEndValue={iconPercentage}
              />
            </div>
          </Card>

          <Card className="p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Additional Options</h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="autoPlay"
                  checked={autoPlay}
                  onCheckedChange={(checked) => setAutoPlay(checked === true)}
                />
                <Label htmlFor="autoPlay" className="cursor-pointer">
                  Auto Play
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="pauseOnHover"
                  checked={pauseOnHover}
                  onCheckedChange={(checked) => setPauseOnHover(checked === true)}
                />
                <Label htmlFor="pauseOnHover" className="cursor-pointer">
                  Pause On Hover
                </Label>
              </div>

              <RangeBar 
                value={speed}
                setState={setSpeed}
                htmlFor="speed"
                htmlForText="Animation Speed (ms)"
                className="w-[95%]"
                id="speed"
                minRange={minSpeedRange}
                maxRange={maxSpeedRange}
                step={5000}
                styleBackgroundStyleInitValue={speedPercentage}
                styleBackgroundStyleEndValue={speedPercentage}
              />
              
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Preview</h2>
            <div className="p-6 rounded-lg">
              {
                loaded ?
                  <div className={`transition-opacity duration-300 ${loaded ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                    <div className="relative">
                      <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                          {brandLists.map((list, index) => (
                            <div className="min-w-full px-2" key={index}>
                              <Slider
                                brandsList={list}
                                borderWidth={borderWidth}
                                borderColor={borderColor}
                                backgroundColor={backgroundColor}
                                iconWidth={iconWidth}
                                isPlay={autoPlay}
                                pauseOnHoverActive={pauseOnHover}
                                durationMs={speed}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Dots */}
                      <div className="flex justify-center mt-4 space-x-4">
                        {brandLists.map((_, index) => (
                            <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`px-4 py-1 text-sm rounded-full transition-colors duration-200 ${
                                selectedIndex === index
                                ? "bg-purple-600 text-white font-semibold shadow"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                            >
                            {categoryLabels[index]}
                            </button>
                        ))}
                        </div>
                    </div>
                  </div>
                : 
                <div className="h-[144px] flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-[#7c05d8] border-t-transparent rounded-full animate-spin"></div>
                </div>
              }
            </div>
          </Card>

          <Card className="p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4">Generated Code</h2>
            <Tabs defaultValue="jsx">
              <TabsList className="mb-4">
                <TabsTrigger value="jsx">JSX</TabsTrigger>
                <TabsTrigger value="props">Props</TabsTrigger>
              </TabsList>
              <TabsContent value="jsx" className="p-4 bg-gray-100 rounded-md font-mono text-sm overflow-x-auto">
                {`<Slider
                  brandsList={${categoryLabels[selectedIndex].toLowerCase()}}
                  borderWidth={${borderWidth}}
                  borderColor="${borderColor}"
                  backgroundColor="${backgroundColor}"
                  iconWidth: "${iconWidth}",
                  }${
                    !autoPlay
                      ? `
                  autoPlay={false}`
                      : ""
                  }${
                    !pauseOnHover
                      ? `
                  pauseOnHover={false}`
                      : " pauseOnHover={true}"
                  }${
                    speed !== 3000
                      ? `
                  speed={${speed}}`
                      : ""
                  }
                />`}
              </TabsContent>
              <TabsContent value="props" className="p-4 bg-gray-100 rounded-md font-mono text-sm overflow-x-auto">
                {`{
                  borderWidth: ${borderWidth},
                  borderColor: "${borderColor}",
                  backgroundColor: "${backgroundColor}",
                  iconWidth: "${iconWidth}",
                  autoPlay: ${autoPlay},
                  pauseOnHover: ${pauseOnHover},
                  speed: ${speed},

                }`}
              </TabsContent>
            </Tabs>
          </Card>

          <div className="flex items-center gap-2 bg-black text-green-400 font-mono text-sm p-4 mt-5 rounded-md mb-8 shadow-inner">
            <Terminal className="w-4 h-4" />
            <span>$ npm install react-tech-slider</span>
          </div>
        </div>
      </div>
    </div>
  )
}
