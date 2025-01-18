import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const CardLayout = () => {
  return (
    <div className="bg-black text-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Small Card */}
        <Card className="bg-gray-800 hover:bg-gray-700 transition duration-300">
          <CardHeader>
            <CardTitle>Quivr</CardTitle>
          </CardHeader>
        </Card>

        {/* Small Card */}
        <Card className="bg-gray-800 hover:bg-gray-700 transition duration-300">
          <CardHeader>
            <CardTitle>1Password</CardTitle>
          </CardHeader>
        </Card>

        {/* Large Card */}
        <Card className="col-span-2 md:col-span-2 lg:col-span-2 bg-gray-800 hover:bg-gray-700 transition duration-300">
          <CardHeader>
            <CardTitle>maergo</CardTitle>
          </CardHeader>
          <CardContent>
            Maergo's Express Delivery: How Supabase Helped Achieve Scalability, Speed, and Cost Saving
          </CardContent>
        </Card>

        {/* Small Card */}
        <Card className="bg-gray-800 hover:bg-gray-700 transition duration-300">
          <CardHeader>
            <CardTitle>Shotgun</CardTitle>
          </CardHeader>
        </Card>

        {/* Small Card */}
        <Card className="bg-gray-800 hover:bg-gray-700 transition duration-300">
          <CardHeader>
            <CardTitle>Tinloof</CardTitle>
          </CardHeader>
        </Card>

        {/* Small Card */}
        <Card className="bg-gray-800 hover:bg-gray-700 transition duration-300">
          <CardHeader>
            <CardTitle>Next Door Lending</CardTitle>
          </CardHeader>
        </Card>

        {/* Small Card */}
        <Card className="bg-gray-800 hover:bg-gray-700 transition duration-300">
          <CardHeader>
            <CardTitle>Mozilla</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default CardLayout;
