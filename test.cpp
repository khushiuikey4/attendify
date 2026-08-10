#include <iostream>
using namespace std;

void pattern(int n)
{
    for (int i = n; i >= 1; i--)
    {
        for (int j = n; j >= i; j--)
        {
            cout << j;
        }
        for (int k = 0; k < i * 2 - 3; k++)
        {
            cout << i;
        }
        int val = i;
        if (i == 1)
            val++;
        for (int l = val; l <= n; l++)
        {
            cout << l;
        }
        cout << endl;
    }
    for (int i = 2; i <= n; i++)
    {
        for (int j = n; j >= i; j--)
        {
            cout << j;
        }
        for (int k = 0; k < 2 * i - 3; k++)
        {
            cout << i;
        }
        for (int l = i; l <= n; l++)
        {
            cout << l;
        }
        cout << endl;
    }
}

int main()
{
    pattern(5);
    return 0;
}
