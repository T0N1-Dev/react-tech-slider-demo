"use client"

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Slider } from "react-tech-slider";
import { techStack, sportBrands, foodBrands } from "@/lib/data"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal } from "lucide-react";
import Head from 'next/head';
import MultiSliderCarousel from "@/components/MultiSliderCarousel";

export default function SliderPropsEditor() {
  const [borderWidth, setBorderWidth] = useState(1);
  const [borderColor, setBorderColor] = useState("#7c05d8");
  const [backgroundColor, setBackgroundColor] = useState("#00000033");
  const [increaseIconWidth, setIncreaseIconWidth] = useState(false);

  // Additional props for more customization
  const [autoPlay, setAutoPlay] = useState(true);
  const [pauseOnHover, setPauseOnHover] = useState(false);
  const [speed, setSpeed] = useState(30000);
  const [loaded, setLoaded] = useState(false);

  // Calculate percentage for speed slider (3000-30000 range)
  const speedPercentage = ((speed - 5000) / (40000 - 5000)) * 100;

  // To prevent the component from loading before the css
  useEffect(() => {
    const handleLoad = () => setLoaded(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [])
  
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
              <div className="space-y-2">
                <Label htmlFor="borderWidth">Border Width</Label>
                <div className="flex items-center gap-4">
                  <input
                    id="borderWidth"
                    type="range"
                    min="0"
                    max="10"
                    value={borderWidth}
                    onChange={(e) => setBorderWidth(Number(e.target.value))}
                    className="flex-1 h-2 rounded-full appearance-none cursor-pointer bg-gray-100 border border-gray-200"
                    style={{
                      background: `linear-gradient(to right, #7c05d8 0%, #7c05d8 ${borderWidth * 10}%, #f1f3f4 ${borderWidth * 10}%, #f1f3f4 100%)`,
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                    }}
                  />
                  <span className="w-8 text-center">{borderWidth}px</span>
                </div>
              </div>

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

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="increaseIconWidth"
                  checked={increaseIconWidth}
                  onCheckedChange={(checked) => setIncreaseIconWidth(checked === true)}
                />
                <Label htmlFor="increaseIconWidth" className="cursor-pointer">
                  Increase Icons Width
                </Label>
              </div>
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

              <div className="space-y-2">
                <Label htmlFor="speed">Animation Speed (ms)</Label>
                <div className="flex items-center gap-4 w-[95%]">
                  <input
                    id="speed"
                    type="range"
                    min="5000"
                    max="40000"
                    step="5000"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className="flex-1 h-2 rounded-full appearance-none cursor-pointer bg-gray-100 border border-gray-200"
                    style={{
                      background: `linear-gradient(to right, #7c05d8 0%, #7c05d8 ${speedPercentage}%, #f1f3f4 ${speedPercentage}%, #f1f3f4 100%)`,
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                    }}
                  />
                  <span className="w-8 text-center">{speed}ms</span>
                </div>
              </div>
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
                    <MultiSliderCarousel
                      borderWidth={borderWidth}
                      borderColor={borderColor}
                      backgroundColor={backgroundColor}
                      iconWidth={increaseIconWidth ? 6 : undefined}
                      isPlay={autoPlay}
                      pauseOnHoverActive={pauseOnHover}
                      durationMs={speed}
                    />
                  </div>
                : 
                <div className="h-[100px] flex items-center justify-center">
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
                  brandsList={techStack}
                  borderWidth={${borderWidth}}
                  borderColor="${borderColor}"
                  backgroundColor="${backgroundColor}"${
                    increaseIconWidth
                      ? `
                  iconWidth={10}`
                      : ""
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
                  backgroundColor: "${backgroundColor}",${
                    increaseIconWidth
                      ? `
                  iconWidth: 10,`
                      : ""
                  }
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
