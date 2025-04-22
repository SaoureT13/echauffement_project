import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../ui/screens/orders_screen.dart';
import '../ui/screens/customers_screen.dart';
import '../ui/screens/products_screen.dart';

class AppNavigation extends StatefulWidget {
  const AppNavigation({super.key});

  @override
  State<AppNavigation> createState() => _AppNavigationState();
}

class _AppNavigationState extends State<AppNavigation> {
  int _selectedIndex = 0;

  final List<Widget> _screens = [
    const OrdersScreen(),
    const CustomersScreen(),
    const ProductsScreen(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _screens[_selectedIndex],
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(
            icon: SvgPicture.asset(
              "assets/icons/file_text.svg",
              colorFilter:
                  _selectedIndex == 0
                      ? ColorFilter.mode(Color(0xff155DFC), BlendMode.srcIn)
                      : ColorFilter.mode(Colors.black, BlendMode.srcIn),
            ),
            label: 'Orders',
          ),
          BottomNavigationBarItem(
            icon: SvgPicture.asset(
              "assets/icons/user_round.svg",
              colorFilter:
                  _selectedIndex == 1
                      ? ColorFilter.mode(Color(0xff155DFC), BlendMode.srcIn)
                      : ColorFilter.mode(Colors.black, BlendMode.srcIn),
            ),
            label: 'Customers',
          ),
          BottomNavigationBarItem(
            icon: SvgPicture.asset(
              "assets/icons/store.svg",
              colorFilter:
                  _selectedIndex == 2
                      ? ColorFilter.mode(Color(0xff155DFC), BlendMode.srcIn)
                      : ColorFilter.mode(Colors.black, BlendMode.srcIn),
            ),
            label: 'Products',
          ),
        ],
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
        selectedItemColor: Color(0xff155DFC),
        selectedIconTheme: IconThemeData(color: Color(0xffFFFFFF)),
        unselectedItemColor: Colors.grey,
      ),
    );
  }
}
