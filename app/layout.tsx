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
  approved: "bg-green-900 text-green-100 border-green-400",
  pending: "bg-yellow-900 text-yellow-100 border-yellow-400",
  rejected: "bg-red-900 text-red-100 border-red-400",
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
    <div className="flex min-h-screen bg-black text-white">
      {/* Vertical Sidebar */}
      <div className="w-80 bg-black border-r border-white">
        {/* Header */}
        <div className="p-4 border-b border-white">
          <div className="flex items-center gap-2 mb-2">
            <ArrowLeft className="h-4 w-4 text-white" />
            <span className="text-sm text-gray-300">Back to Search</span>
          </div>
          <h2 className="text-lg font-semibold text-white">John Doe</h2>
          <p className="text-sm text-gray-300">PAN: ABCDE1234F | Mobile: 9876543210</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-gray-300">Total Loans</span>
            <span className="text-lg font-bold text-blue-400">2</span>
          </div>
        </div>

        {/* Loans Granted Section */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="h-5 w-5 text-blue-400" />
            <h3 className="font-semibold text-white">Loans Granted</h3>
          </div>
          
          <div className="space-y-3">
            <Card 
              className={`border cursor-pointer transition-all duration-200 bg-black ${
                selectedLoan === "LOAN-001-2024" 
                  ? "border-blue-400 bg-blue-950 shadow-md shadow-blue-400/20" 
                  : "border-white hover:border-blue-400 hover:shadow-sm hover:shadow-blue-400/10"
              }`}
              onClick={() => handleLoanCardClick("LOAN-001-2024")}
            >
              <CardContent className="p-4 bg-black">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white">LOAN-001-2024</span>
                  <Badge className="bg-green-900 text-green-100 border-green-400 text-xs">active</Badge>
                </div>
                <div className="text-xl font-bold text-blue-400 mb-2">₹5,00,000</div>
                <div className="text-sm text-gray-300 space-y-1">
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
              className={`border cursor-pointer transition-all duration-200 bg-black ${
                selectedLoan === "LOAN-002-2024" 
                  ? "border-blue-400 bg-blue-950 shadow-md shadow-blue-400/20" 
                  : "border-white hover:border-blue-400 hover:shadow-sm hover:shadow-blue-400/10"
              }`}
              onClick={() => handleLoanCardClick("LOAN-002-2024")}
            >
              <CardContent className="p-4 bg-black">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white">LOAN-002-2024</span>
                  <Badge className="bg-yellow-900 text-yellow-100 border-yellow-400 text-xs">pending</Badge>
                </div>
                <div className="text-xl font-bold text-blue-400 mb-2">₹3,00,000</div>
                <div className="text-sm text-gray-300 space-y-1">
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
      <div className="flex-1 bg-black">
        {/* Header */}
        <div className="p-6 bg-black border-b border-white">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="h-5 w-5 text-white" />
            <h1 className="text-xl font-semibold text-white">Loan Details - {selectedLoan}</h1>
          </div>
          <p className="text-gray-300 text-sm">Comprehensive loan information and analytics</p>
        </div>

        {/* Tabs */}
        <div className="p-6 bg-black">
          <Tabs defaultValue="eligibility" className="w-full">
            <TabsList className="bg-gray-900 border border-white mb-6">
              <TabsTrigger 
                value="eligibility" 
                className="flex items-center gap-2 text-white data-[state=active]:bg-blue-950 data-[state=active]:text-blue-400"
              >
                <CheckCircle className="h-4 w-4" />
                Eligibility
              </TabsTrigger>
            </TabsList>

            {/* Eligibility Tab Content */}
            <div className="bg-black rounded-lg border border-white">
              <div className="p-6 border-b border-white bg-black">
                <h2 className="text-lg font-semibold mb-2 text-white">Eligibility Information</h2>
                <p className="text-sm text-gray-300">
                  Data from <code className="bg-gray-900 text-gray-100 px-1 rounded border border-gray-600">KNABLAS.be2CheckEligibilityLeads</code> and <code className="bg-gray-900 text-gray-100 px-1 rounded border border-gray-600">KNABLAS.be2CheckEligibilityRequests</code>
                </p>
              </div>

              <div className="p-6 bg-black">
                <div className="overflow-x-auto">
                  {/* Desktop Table View */}
                  <div className="hidden md:block">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-900 border-b border-white">
                          <th className="text-left p-3 font-semibold text-white">Name</th>
                          <th className="text-left p-3 font-semibold text-white">Client Ref No</th>
                          <th className="text-left p-3 font-semibold text-white">Total Mutual Funds</th>
                          <th className="text-left p-3 font-semibold text-white">Available Mutual Funds</th>
                          <th className="text-left p-3 font-semibold text-white">Available Loan Limit</th>
                          <th className="text-left p-3 font-semibold text-white">Stage</th>
                          <th className="text-left p-3 font-semibold text-white">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentEligibilityData.length === 0 ? (
                          <tr>
                            <td colSpan={7} className="p-8 text-center text-gray-300 bg-black">
                              <div className="flex flex-col items-center gap-2">
                                <FileText className="h-12 w-12 text-gray-600" />
                                <p className="text-lg font-medium text-white">No eligibility data available</p>
                                <p className="text-sm text-gray-300">No records found for this loan</p>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          currentEligibilityData.map((item, idx) => (
                            <tr 
                              key={`desktop-${idx}`} 
                              className="border-b border-gray-700 hover:bg-blue-950 cursor-pointer transition-colors"
                              onClick={() => handleLoanRowClick(item.clientRefNo)}
                            >
                              <td className="p-3 font-medium text-white bg-black">{item.name}</td>
                              <td className="p-3 text-white bg-black">{item.clientRefNo}</td>
                              <td className="p-3 text-white bg-black">{item.totalMutualFunds}</td>
                              <td className="p-3 text-white bg-black">{item.availableMutualFunds}</td>
                              <td className="p-3 text-white bg-black">{item.availableLoanLimit}</td>
                              <td className="p-3 bg-black">
                                <Badge className={stageBadgeColor[item.stage as keyof typeof stageBadgeColor]}>
                                  {item.stage}
                                </Badge>
                              </td>
                              <td className="p-3 text-white bg-black">{item.status}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Card View */}
                  <div className="md:hidden space-y-4">
                    {currentEligibilityData.length === 0 ? (
                      <div className="text-center py-8 bg-black">
                        <div className="flex flex-col items-center gap-3">
                          <FileText className="h-16 w-16 text-gray-600" />
                          <p className="text-lg font-medium text-white">No eligibility data available</p>
                          <p className="text-sm text-gray-300">No records found for this loan</p>
                        </div>
                      </div>
                    ) : (
                      currentEligibilityData.map((item, idx) => (
                        <Card 
                          key={`mobile-${idx}`} 
                          className="cursor-pointer hover:shadow-md transition-shadow border-l-4 border-l-blue-400 bg-black border border-white"
                          onClick={() => handleLoanRowClick(item.clientRefNo)}
                        >
                          <CardContent className="p-4 bg-black">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="font-semibold text-lg text-white">{item.name}</h3>
                                <p className="text-sm text-gray-300">{item.clientRefNo}</p>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <Badge className={stageBadgeColor[item.stage as keyof typeof stageBadgeColor]}>
                                  {item.stage}
                                </Badge>
                                <span className="text-xs text-gray-300">{item.status}</span>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 gap-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-300">Total Mutual Funds:</span>
                                <span className="font-medium text-white">{item.totalMutualFunds}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-300">Available Mutual Funds:</span>
                                <span className="font-medium text-white">{item.availableMutualFunds}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-300">Available Loan Limit:</span>
                                <span className="font-medium text-blue-400">{item.availableLoanLimit}</span>
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