#include <iostream>
#include <cmath>
#include <utility>
#include <vector>
#include <unordered_map>
using namespace std;

vector<vector<int>> countFrequencies(vector<int> &nums)
{
    unordered_map<int, int> track;
    for (int i = 0; i < nums.size(); i++)
    {
        track[nums[i]]++;
    }
    vector<vector<int>> ans;
    for (auto p : track)
    {
        ans.push_back({p.first, p.second});
    }
    return ans;
}

int main()
{
    vector<int> nums = {4, 4, 3, 3, 6};
    vector<vector<int>> ans = countFrequencies(nums);
    int maxFreq = 0, maxElement = -1;
    for (vector<int> val : ans)
    {
        if (maxFreq < val[1])
        {
            maxFreq = val[1];
            maxElement = val[0];
        }
        else if (maxFreq == val[1])
        {
            if (maxElement > val[0])
                maxElement = val[0];
        }
    }
    cout << maxElement;
    return 0;
}
