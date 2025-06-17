"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Badge } from "@/components/ui/badge";
import { DollarSign, ArrowLeft, FileText, CheckCircle } from "lucide-react";

// Define the loan data type
interface LoanEligibilityItem {
  name: string;
  clientRefNo: string;
  totalMutualFunds: string;
  availableMutualFunds: string;
  availableLoanLimit: string;
  stage: 'approved' | 'pending' | 'rejected';
  status: string;
}

// Empty loans data - eligibility tables will be empty
const loansData: Record<string, LoanEligibilityItem[]> = {
  "LOAN-001-2024": [],
  "LOAN-002-2024": [],
};

const stageBadgeColor = {
  approved: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  rejected: "bg-red-100 text-red-800",
};

const DashboardPage = () => {
  const [selectedLoan, setSelectedLoan] = useState("LOAN-001-2024");
  
  const handleLoanRowClick = (clientRefNo: string) => {
    console.log(`Clicked on loan for client: ${clientRefNo}`);
    // Add your navigation or action logic here
  };

  const handleLoanCardClick = (loanId: string) => {
    setSelectedLoan(loanId);
  };

  const currentEligibilityData = loansData[selectedLoan] || [];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Vertical Sidebar */}
      <div className="w-80 bg-white border-r">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-2 mb-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm text-gray-600">Back to Search</span>
          </div>
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-sm text-gray-500">PAN: ABCDE1234F | Mobile: 9876543210</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-gray-600">Total Loans</span>
            <span className="text-lg font-bold text-blue-600">2</span>
          </div>
        </div>

        {/* Loans Granted Section */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold">Loans Granted</h3>
          </div>
          
          <div className="space-y-3">
            <Card 
              className={`border cursor-pointer transition-all duration-200 ${
                selectedLoan === "LOAN-001-2024" 
                  ? "border-blue-500 bg-blue-50 shadow-md" 
                  : "border-gray-200 hover:border-blue-300 hover:shadow-sm"
              }`}
              onClick={() => handleLoanCardClick("LOAN-001-2024")}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">LOAN-001-2024</span>
                  <Badge className="bg-green-100 text-green-800 text-xs">active</Badge>
                </div>
                <div className="text-xl font-bold text-blue-600 mb-2">₹5,00,000</div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center gap-1">
                    <span>📅 Start: 15/1/2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>📈 Rate: 12.5% p.a.</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card 
              className={`border cursor-pointer transition-all duration-200 ${
                selectedLoan === "LOAN-002-2024" 
                  ? "border-blue-500 bg-blue-50 shadow-md" 
                  : "border-gray-200 hover:border-blue-300 hover:shadow-sm"
              }`}
              onClick={() => handleLoanCardClick("LOAN-002-2024")}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">LOAN-002-2024</span>
                  <Badge className="bg-yellow-100 text-yellow-800 text-xs">pending</Badge>
                </div>
                <div className="text-xl font-bold text-blue-600 mb-2">₹3,00,000</div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center gap-1">
                    <span>📅 Start: 1/2/2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>📈 Rate: 11% p.a.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="p-6 bg-white border-b">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="h-5 w-5" />
            <h1 className="text-xl font-semibold">Loan Details - {selectedLoan}</h1>
          </div>
          <p className="text-gray-600 text-sm">Comprehensive loan information and analytics</p>
        </div>

        {/* Tabs */}
        <div className="p-6">
          <Tabs defaultValue="eligibility" className="w-full">
            <TabsList className="bg-gray-100 mb-6">
              <TabsTrigger value="eligibility" className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Eligibility
              </TabsTrigger>
            </TabsList>

            {/* Eligibility Tab Content */}
            <div className="bg-white rounded-lg border">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold mb-2">Eligibility Information</h2>
                <p className="text-sm text-gray-500">
                  Data from <code className="bg-gray-100 px-1 rounded">KNABLAS.be2CheckEligibilityLeads</code> and <code className="bg-gray-100 px-1 rounded">KNABLAS.be2CheckEligibilityRequests</code>
                </p>
              </div>

              <div className="p-6">
                <div className="overflow-x-auto">
                  {/* Desktop Table View */}
                  <div className="hidden md:block">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50 border-b">
                          <th className="text-left p-3 font-semibold text-gray-700">Name</th>
                          <th className="text-left p-3 font-semibold text-gray-700">Client Ref No</th>
                          <th className="text-left p-3 font-semibold text-gray-700">Total Mutual Funds</th>
                          <th className="text-left p-3 font-semibold text-gray-700">Available Mutual Funds</th>
                          <th className="text-left p-3 font-semibold text-gray-700">Available Loan Limit</th>
                          <th className="text-left p-3 font-semibold text-gray-700">Stage</th>
                          <th className="text-left p-3 font-semibold text-gray-700">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentEligibilityData.length === 0 ? (
                          <tr>
                            <td colSpan={7} className="p-8 text-center text-gray-500">
                              <div className="flex flex-col items-center gap-2">
                                <FileText className="h-12 w-12 text-gray-300" />
                                <p className="text-lg font-medium">No eligibility data available</p>
                                <p className="text-sm">No records found for this loan</p>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          currentEligibilityData.map((item, idx) => (
                            <tr 
                              key={`desktop-${idx}`} 
                              className="border-b hover:bg-blue-50 cursor-pointer transition-colors"
                              onClick={() => handleLoanRowClick(item.clientRefNo)}
                            >
                              <td className="p-3 font-medium">{item.name}</td>
                              <td className="p-3">{item.clientRefNo}</td>
                              <td className="p-3">{item.totalMutualFunds}</td>
                              <td className="p-3">{item.availableMutualFunds}</td>
                              <td className="p-3">{item.availableLoanLimit}</td>
                              <td className="p-3">
                                <Badge className={stageBadgeColor[item.stage as keyof typeof stageBadgeColor]}>
                                  {item.stage}
                                </Badge>
                              </td>
                              <td className="p-3">{item.status}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Card View */}
                  <div className="md:hidden space-y-4">
                    {currentEligibilityData.length === 0 ? (
                      <div className="text-center py-8">
                        <div className="flex flex-col items-center gap-3">
                          <FileText className="h-16 w-16 text-gray-300" />
                          <p className="text-lg font-medium text-gray-600">No eligibility data available</p>
                          <p className="text-sm text-gray-500">No records found for this loan</p>
                        </div>
                      </div>
                    ) : (
                      currentEligibilityData.map((item, idx) => (
                        <Card 
                          key={`mobile-${idx}`} 
                          className="cursor-pointer hover:shadow-md transition-shadow border-l-4 border-l-blue-500"
                          onClick={() => handleLoanRowClick(item.clientRefNo)}
                        >
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="font-semibold text-lg">{item.name}</h3>
                                <p className="text-sm text-gray-600">{item.clientRefNo}</p>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <Badge className={stageBadgeColor[item.stage as keyof typeof stageBadgeColor]}>
                                  {item.stage}
                                </Badge>
                                <span className="text-xs text-gray-500">{item.status}</span>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 gap-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Total Mutual Funds:</span>
                                <span className="font-medium">{item.totalMutualFunds}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Available Mutual Funds:</span>
                                <span className="font-medium">{item.availableMutualFunds}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Available Loan Limit:</span>
                                <span className="font-medium text-blue-600">{item.availableLoanLimit}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;