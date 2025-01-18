import React, { FC } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const CardLayout: FC = () => {
  return (
    <div className="p-12 px-24 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Small Card */}
        <Card className="h-48 bg-transparent border border-gray-300 hover:border-gray-400 transition duration-300">
          <CardHeader>
            <CardTitle>Quivr</CardTitle>
          </CardHeader>
        </Card>

        {/* Small Card */}
        <Card className="h-48 bg-transparent border border-gray-300 hover:border-gray-400 transition duration-300">
          <CardHeader>
            <CardTitle>1Password</CardTitle>
          </CardHeader>
        </Card>

        {/* Large Card */}
        <Card className="h-48 col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-2 bg-transparent border border-gray-300 hover:border-gray-400 transition duration-300">
          <CardHeader>
            <CardTitle>maergo</CardTitle>
          </CardHeader>
          <CardContent>
            Maergo's Express Delivery: How Supabase Helped Achieve Scalability,
            Speed, and Cost Saving
          </CardContent>
        </Card>

        {/* Small Card */}
        <Card className="h-48 bg-transparent border border-gray-300 hover:border-gray-400 transition duration-300">
          <CardHeader>
            <CardTitle>Shotgun</CardTitle>
          </CardHeader>
        </Card>

        {/* Large Card */}
        <Card className="h-48 col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-2 bg-transparent border border-gray-300 hover:border-gray-400 transition duration-300">
          <CardHeader>
            <CardTitle>maergo</CardTitle>
          </CardHeader>
          <CardContent>
            Maergo's Express Delivery: How Supabase Helped Achieve Scalability,
            Speed, and Cost Saving
          </CardContent>
        </Card>

        {/* Small Card */}
        <Card className="h-48 bg-transparent border border-gray-300 hover:border-gray-400 transition duration-300">
          <CardHeader>
            <CardTitle>Mozilla</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default CardLayout;
